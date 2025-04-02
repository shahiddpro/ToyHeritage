import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertProductSchema, insertUserSchema, insertCartItemSchema, insertOrderSchema, insertOrderItemSchema, insertReviewSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // === User Routes ===
  app.get("/api/users/:id", async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Don't return password
    const { password, ...userWithoutPassword } = user;
    return res.json(userWithoutPassword);
  });

  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(userData.username);
      
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      
      const newUser = await storage.createUser(userData);
      const { password, ...userWithoutPassword } = newUser;
      
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid user data", errors: error.errors });
      }
      return res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/artisans", async (_req: Request, res: Response) => {
    const artisans = await storage.getArtisans();
    // Remove passwords
    const artisansWithoutPasswords = artisans.map(({ password, ...rest }) => rest);
    return res.json(artisansWithoutPasswords);
  });

  app.get("/api/artisans/:id", async (req: Request, res: Response) => {
    const artisanId = parseInt(req.params.id);
    if (isNaN(artisanId)) {
      return res.status(400).json({ message: "Invalid artisan ID" });
    }
    
    const artisan = await storage.getArtisan(artisanId);
    if (!artisan) {
      return res.status(404).json({ message: "Artisan not found" });
    }
    
    // Don't return password
    const { password, ...artisanWithoutPassword } = artisan;
    
    // Get artisan's products
    const products = await storage.getProductsByArtisan(artisanId);
    
    return res.json({
      ...artisanWithoutPassword,
      products
    });
  });

  // === Product Routes ===
  app.get("/api/products", async (_req: Request, res: Response) => {
    const products = await storage.getProducts();
    return res.json(products);
  });

  app.get("/api/products/featured", async (_req: Request, res: Response) => {
    const featuredProducts = await storage.getFeaturedProducts();
    return res.json(featuredProducts);
  });

  app.get("/api/products/category/:category", async (req: Request, res: Response) => {
    const category = req.params.category;
    const products = await storage.getProductsByCategory(category);
    return res.json(products);
  });

  app.get("/api/products/region/:region", async (req: Request, res: Response) => {
    const region = req.params.region;
    const products = await storage.getProductsByRegion(region);
    return res.json(products);
  });

  app.get("/api/products/search", async (req: Request, res: Response) => {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }
    
    const products = await storage.searchProducts(query);
    return res.json(products);
  });

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    
    const product = await storage.getProduct(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    return res.json(product);
  });

  app.post("/api/products", async (req: Request, res: Response) => {
    try {
      const productData = insertProductSchema.parse(req.body);
      const newProduct = await storage.createProduct(productData);
      return res.status(201).json(newProduct);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid product data", errors: error.errors });
      }
      return res.status(500).json({ message: "Server error" });
    }
  });

  // === Region Routes ===
  app.get("/api/regions", async (_req: Request, res: Response) => {
    const regions = await storage.getRegions();
    return res.json(regions);
  });

  app.get("/api/regions/:id", async (req: Request, res: Response) => {
    const regionId = parseInt(req.params.id);
    if (isNaN(regionId)) {
      return res.status(400).json({ message: "Invalid region ID" });
    }
    
    const region = await storage.getRegion(regionId);
    if (!region) {
      return res.status(404).json({ message: "Region not found" });
    }
    
    // Get products from this region
    const products = await storage.getProductsByRegion(region.name);
    
    return res.json({
      ...region,
      products
    });
  });

  // === Cart Routes ===
  app.get("/api/cart/:userId", async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    
    const cartItems = await storage.getCartItems(userId);
    
    // Get product details for each cart item
    const cartItemsWithProducts = await Promise.all(
      cartItems.map(async (item) => {
        const product = await storage.getProduct(item.productId);
        return {
          ...item,
          product
        };
      })
    );
    
    return res.json(cartItemsWithProducts);
  });

  app.post("/api/cart", async (req: Request, res: Response) => {
    try {
      const cartItemData = insertCartItemSchema.parse(req.body);
      
      // Check if product exists
      const product = await storage.getProduct(cartItemData.productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      // Check if product is in stock
      if (product.stock < cartItemData.quantity) {
        return res.status(400).json({ message: "Not enough stock available" });
      }
      
      const cartItem = await storage.addToCart(cartItemData);
      
      // Get product details for response
      const cartItemWithProduct = {
        ...cartItem,
        product
      };
      
      return res.status(201).json(cartItemWithProduct);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid cart item data", errors: error.errors });
      }
      return res.status(500).json({ message: "Server error" });
    }
  });

  app.put("/api/cart/:id", async (req: Request, res: Response) => {
    const cartItemId = parseInt(req.params.id);
    if (isNaN(cartItemId)) {
      return res.status(400).json({ message: "Invalid cart item ID" });
    }
    
    const { quantity } = req.body;
    if (typeof quantity !== 'number' || quantity < 1) {
      return res.status(400).json({ message: "Invalid quantity" });
    }
    
    const updatedCartItem = await storage.updateCartItem(cartItemId, quantity);
    if (!updatedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    
    // Get product details for response
    const product = await storage.getProduct(updatedCartItem.productId);
    const cartItemWithProduct = {
      ...updatedCartItem,
      product
    };
    
    return res.json(cartItemWithProduct);
  });

  app.delete("/api/cart/:id", async (req: Request, res: Response) => {
    const cartItemId = parseInt(req.params.id);
    if (isNaN(cartItemId)) {
      return res.status(400).json({ message: "Invalid cart item ID" });
    }
    
    const success = await storage.removeFromCart(cartItemId);
    if (!success) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    
    return res.json({ message: "Cart item removed successfully" });
  });

  app.delete("/api/cart/user/:userId", async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    
    await storage.clearCart(userId);
    return res.json({ message: "Cart cleared successfully" });
  });

  // === Order Routes ===
  app.post("/api/orders", async (req: Request, res: Response) => {
    try {
      const { order, orderItems } = req.body;
      
      const orderData = insertOrderSchema.parse(order);
      const newOrder = await storage.createOrder(orderData);
      
      // Create order items
      const createdOrderItems = await Promise.all(
        orderItems.map(async (item: any) => {
          const orderItemData = insertOrderItemSchema.parse({
            ...item,
            orderId: newOrder.id
          });
          
          const orderItem = await storage.createOrderItem(orderItemData);
          
          // Update product stock
          const product = await storage.getProduct(orderItemData.productId);
          if (product) {
            await storage.updateProduct(product.id, {
              stock: product.stock - orderItemData.quantity
            });
          }
          
          return orderItem;
        })
      );
      
      // Clear user's cart
      await storage.clearCart(orderData.userId);
      
      return res.status(201).json({
        order: newOrder,
        orderItems: createdOrderItems
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid order data", errors: error.errors });
      }
      return res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/orders/user/:userId", async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    
    const orders = await storage.getOrders(userId);
    
    // Get order items for each order
    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const items = await storage.getOrderItems(order.id);
        
        // Get product details for each order item
        const itemsWithProducts = await Promise.all(
          items.map(async (item) => {
            const product = await storage.getProduct(item.productId);
            return {
              ...item,
              product
            };
          })
        );
        
        return {
          ...order,
          items: itemsWithProducts
        };
      })
    );
    
    return res.json(ordersWithItems);
  });

  // === Review Routes ===
  app.get("/api/reviews/product/:productId", async (req: Request, res: Response) => {
    const productId = parseInt(req.params.productId);
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    
    const reviews = await storage.getProductReviews(productId);
    
    // Get user info for each review
    const reviewsWithUsers = await Promise.all(
      reviews.map(async (review) => {
        const user = await storage.getUser(review.userId);
        return {
          ...review,
          user: user ? { id: user.id, name: user.name, username: user.username } : null
        };
      })
    );
    
    return res.json(reviewsWithUsers);
  });

  app.post("/api/reviews", async (req: Request, res: Response) => {
    try {
      const reviewData = insertReviewSchema.parse(req.body);
      
      // Check if product exists
      const product = await storage.getProduct(reviewData.productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      // Check if user exists
      const user = await storage.getUser(reviewData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      const newReview = await storage.createReview(reviewData);
      
      return res.status(201).json({
        ...newReview,
        user: { id: user.id, name: user.name, username: user.username }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid review data", errors: error.errors });
      }
      return res.status(500).json({ message: "Server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
