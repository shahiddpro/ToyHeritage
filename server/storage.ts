import { 
  users, type User, type InsertUser,
  products, type Product, type InsertProduct,
  regions, type Region, type InsertRegion,
  orders, type Order, type InsertOrder,
  orderItems, type OrderItem, type InsertOrderItem,
  reviews, type Review, type InsertReview,
  cartItems, type CartItem, type InsertCartItem
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  getArtisans(): Promise<User[]>;
  getArtisan(id: number): Promise<User | undefined>;

  // Product operations
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductsByRegion(region: string): Promise<Product[]>;
  getProductsByArtisan(artisanId: number): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;

  // Region operations
  getRegions(): Promise<Region[]>;
  getRegion(id: number): Promise<Region | undefined>;
  getRegionByName(name: string): Promise<Region | undefined>;
  createRegion(region: InsertRegion): Promise<Region>;

  // Order operations
  getOrders(userId: number): Promise<Order[]>;
  getOrder(id: number): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrderStatus(id: number, status: string): Promise<Order | undefined>;

  // Order item operations
  getOrderItems(orderId: number): Promise<OrderItem[]>;
  createOrderItem(orderItem: InsertOrderItem): Promise<OrderItem>;

  // Review operations
  getProductReviews(productId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  // Cart operations
  getCartItems(userId: number): Promise<CartItem[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
  clearCart(userId: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private regions: Map<number, Region>;
  private orders: Map<number, Order>;
  private orderItems: Map<number, OrderItem>;
  private reviews: Map<number, Review>;
  private cartItems: Map<number, CartItem>;
  
  private userIdCounter: number;
  private productIdCounter: number;
  private regionIdCounter: number;
  private orderIdCounter: number;
  private orderItemIdCounter: number;
  private reviewIdCounter: number;
  private cartItemIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.regions = new Map();
    this.orders = new Map();
    this.orderItems = new Map();
    this.reviews = new Map();
    this.cartItems = new Map();
    
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.regionIdCounter = 1;
    this.orderIdCounter = 1;
    this.orderItemIdCounter = 1;
    this.reviewIdCounter = 1;
    this.cartItemIdCounter = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Create regions
    const regions = [
      {
        name: "North India",
        description: "Discover wooden toys from Varanasi, cloth dolls from Punjab, and colorful puppets from Rajasthan.",
        imageUrl: "/images/regions/north-india.svg"
      },
      {
        name: "South India",
        description: "Explore Channapatna toys from Karnataka, Kondapalli toys from Andhra Pradesh, and leather puppets.",
        imageUrl: "/images/regions/south-india.svg"
      },
      {
        name: "East India",
        description: "Discover clay dolls from West Bengal, bamboo toys from Assam, and painted wooden figures.",
        imageUrl: "/images/regions/east-india.svg"
      },
      {
        name: "West India",
        description: "Explore wooden toys from Gujarat, clay figures from Maharashtra, and tribal art toys.",
        imageUrl: "/images/regions/west-india.svg"
      }
    ];

    regions.forEach(region => this.createRegion(region));

    // Create some artisans
    const artisans = [
      {
        username: "ramesh_kumar",
        password: "password123",
        name: "Ramesh Kumar",
        email: "ramesh@example.com",
        phoneNumber: "+919876543210",
        address: "Channapatna, Karnataka",
        isArtisan: true,
        bio: "Ramesh has been crafting Channapatna toys for over 30 years, carrying forward the legacy of his grandfather who learned under the patronage of local royalty.",
        region: "South India"
      },
      {
        username: "laxmi_devi",
        password: "password123",
        name: "Laxmi Devi",
        email: "laxmi@example.com",
        phoneNumber: "+919876543211",
        address: "Krishnanagar, West Bengal",
        isArtisan: true,
        bio: "Known for her intricate clay figurines depicting rural Bengali life, Laxmi has received national recognition for preserving this ancient art form.",
        region: "East India"
      },
      {
        username: "mohan_singh",
        password: "password123",
        name: "Mohan Singh",
        email: "mohan@example.com",
        phoneNumber: "+919876543212",
        address: "Jaisalmer, Rajasthan",
        isArtisan: true,
        bio: "A renowned puppeteer from Rajasthan, Mohan creates traditional kathputli puppets that tell stories of Rajasthani folklore and mythology.",
        region: "North India"
      }
    ];

    const artisanIds: number[] = [];
    artisans.forEach(artisan => {
      const createdArtisan = this.createUser(artisan);
      artisanIds.push(createdArtisan.id);
    });

    // Create products
    const products = [
      {
        name: "Channapatna Wooden Horse",
        description: "Traditional lacquered wooden toy from the toy town of Karnataka, featuring natural colors.",
        price: "1250",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/products/channapatna-wooden-horse.png",
        artisanId: artisanIds[0],
        stock: 15,
        history: "Channapatna toys have a rich history dating back to the reign of Tipu Sultan who invited Persian artisans to train local craftsmen in toy making. The craft has been passed down through generations for over 200 years.",
        culturalSignificance: "Known as the 'toy town' of Karnataka, Channapatna toys are GI-tagged and represent the state's cultural heritage. These toys are made with ivory wood and natural dyes, making them safe for children.",
        featured: true
      },
      {
        name: "Bengali Clay Doll",
        description: "Hand-painted terracotta doll representing rural life traditions from Bengal.",
        price: "850",
        category: "Clay Crafts",
        region: "East India",
        material: "Clay",
        imageUrl: "/images/toys/clay-doll.svg",
        artisanId: artisanIds[1],
        stock: 20,
        history: "The tradition of making clay dolls in West Bengal dates back several centuries. Krishnanagar in particular is famous for its lifelike clay dolls that showcase the region's artistic excellence.",
        culturalSignificance: "These dolls often represent rural Bengali life, folklore, and deities. They play a significant role in local festivals and are considered important cultural artifacts.",
        featured: true
      },
      {
        name: "Kathputli String Puppet",
        description: "Traditional Rajasthani string puppet with intricate detailing and vibrant costume.",
        price: "1750",
        category: "Puppets & Dolls",
        region: "North India",
        material: "Cloth and Wood",
        imageUrl: "/images/toys/kathputli.svg",
        artisanId: artisanIds[2],
        stock: 10,
        history: "Kathputli puppetry originated in Rajasthan over a thousand years ago. Traditionally performed by nomadic tribes, these puppets have been used to tell stories from mythology and folklore.",
        culturalSignificance: "More than just toys, Kathputli puppets are a form of theatrical storytelling that preserves Rajasthani folklore and traditions. The puppeteers typically belong to families that have practiced this art for generations.",
        featured: true
      },
      {
        name: "Kondapalli Bullock Cart",
        description: "Handcrafted wooden toy from Andhra Pradesh made with softwood and natural colors.",
        price: "2100",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/wooden-bullock-cart.svg",
        artisanId: artisanIds[0],
        stock: 8,
        history: "Kondapalli toys have been crafted in the Kondapalli village near Vijayawada for over 400 years. The craft gained prominence during the rule of Krishna Deva Raya of the Vijayanagara Empire.",
        culturalSignificance: "These toys are made from a special softwood called 'Tella Poniki' and represent rural life in Andhra Pradesh. They are often displayed during traditional festivals and celebrations.",
        featured: true
      },
      {
        name: "Wooden Baby Rattle",
        description: "Handcrafted baby rattle made with natural wood and non-toxic colors.",
        price: "550",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/wooden-rattle.svg",
        artisanId: artisanIds[0],
        stock: 25,
        history: "Traditional wooden rattles have been a part of Indian childhood for centuries. These Channapatna rattles continue the age-old tradition while ensuring they are safe for infants.",
        culturalSignificance: "In Indian culture, toys like rattles are not just playthings but are believed to aid in sensory development of babies.",
        featured: false
      },
      {
        name: "Wooden Train Set",
        description: "Colorful wooden train set with engine and two compartments.",
        price: "1250",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/wooden-train.svg",
        artisanId: artisanIds[0],
        stock: 12,
        history: "Train toys became popular in Indian toy culture with the introduction of railways during the colonial period. Today's versions maintain traditional crafting techniques.",
        culturalSignificance: "These toys represent the blend of modern influence with traditional craftsmanship, showing how Indian toy culture adapts while preserving heritage techniques.",
        featured: false
      },
      {
        name: "Spinning Top",
        description: "Traditional lacquered wooden spinning top with vibrant colors.",
        price: "350",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/spinning-top.svg",
        artisanId: artisanIds[0],
        stock: 30,
        history: "Spinning tops or 'lattu' have been popular traditional toys across India for centuries. They were mentioned in ancient Indian texts and continue to be popular today.",
        culturalSignificance: "The spinning top is not just a toy but was traditionally used to teach children about physics and motion in a playful way.",
        featured: false
      },
      {
        name: "Wooden Elephant",
        description: "Intricately carved and painted wooden elephant figurine.",
        price: "850",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/wooden-elephant.svg",
        artisanId: artisanIds[0],
        stock: 15,
        history: "Elephant figurines have deep roots in Indian culture and have been crafted for centuries. The elephant is associated with Lord Ganesha and symbolizes wisdom and strength.",
        culturalSignificance: "In Hindu culture, the elephant is considered auspicious and is often given as gifts during special occasions.",
        featured: false
      },
      {
        name: "Miniature Dollhouse",
        description: "Hand-crafted wooden dollhouse with furniture and figurines.",
        price: "1950",
        category: "Wooden Toys",
        region: "South India",
        material: "Wood",
        imageUrl: "/images/toys/dollhouse.svg",
        artisanId: artisanIds[0],
        stock: 5,
        history: "Miniature houses have been part of Indian toy tradition, often depicting traditional rural homes with their distinctive architecture and lifestyle.",
        culturalSignificance: "These dollhouses were traditionally used to educate children about domestic life and social structures in a playful manner.",
        featured: false
      }
    ];

    products.forEach(product => this.createProduct(product as any));
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const newUser: User = { ...user, id };
    this.users.set(id, newUser);
    return newUser;
  }

  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...userData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getArtisans(): Promise<User[]> {
    return Array.from(this.users.values()).filter(user => user.isArtisan);
  }

  async getArtisan(id: number): Promise<User | undefined> {
    const user = this.users.get(id);
    return user && user.isArtisan ? user : undefined;
  }

  // Product operations
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    const newProduct = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async updateProduct(id: number, productData: Partial<InsertProduct>): Promise<Product | undefined> {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { ...product, ...productData };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getProductsByRegion(region: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.region === region
    );
  }

  async getProductsByArtisan(artisanId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.artisanId === artisanId
    );
  }

  async searchProducts(query: string): Promise<Product[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.products.values()).filter(product => {
      return (
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        product.region.toLowerCase().includes(lowercaseQuery) ||
        product.material.toLowerCase().includes(lowercaseQuery)
      );
    });
  }

  // Region operations
  async getRegions(): Promise<Region[]> {
    return Array.from(this.regions.values());
  }

  async getRegion(id: number): Promise<Region | undefined> {
    return this.regions.get(id);
  }
  
  async getRegionByName(name: string): Promise<Region | undefined> {
    return Array.from(this.regions.values()).find(
      region => region.name === name
    );
  }

  async createRegion(region: InsertRegion): Promise<Region> {
    const id = this.regionIdCounter++;
    const newRegion = { ...region, id };
    this.regions.set(id, newRegion);
    return newRegion;
  }

  // Order operations
  async getOrders(userId: number): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(
      order => order.userId === userId
    );
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const id = this.orderIdCounter++;
    const newOrder = { ...order, id };
    this.orders.set(id, newOrder);
    return newOrder;
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (!order) return undefined;
    
    const updatedOrder = { ...order, status };
    this.orders.set(id, updatedOrder);
    return updatedOrder;
  }

  // Order item operations
  async getOrderItems(orderId: number): Promise<OrderItem[]> {
    return Array.from(this.orderItems.values()).filter(
      item => item.orderId === orderId
    );
  }

  async createOrderItem(orderItem: InsertOrderItem): Promise<OrderItem> {
    const id = this.orderItemIdCounter++;
    const newOrderItem = { ...orderItem, id };
    this.orderItems.set(id, newOrderItem);
    return newOrderItem;
  }

  // Review operations
  async getProductReviews(productId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(
      review => review.productId === productId
    );
  }

  async createReview(review: InsertReview): Promise<Review> {
    const id = this.reviewIdCounter++;
    const newReview = { ...review, id };
    this.reviews.set(id, newReview);
    return newReview;
  }

  // Cart operations
  async getCartItems(userId: number): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(
      item => item.userId === userId
    );
  }

  async addToCart(cartItem: InsertCartItem): Promise<CartItem> {
    // Check if product already in cart
    const existingItem = Array.from(this.cartItems.values()).find(
      item => item.userId === cartItem.userId && item.productId === cartItem.productId
    );

    if (existingItem) {
      // Update quantity if product already in cart
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + cartItem.quantity
      };
      this.cartItems.set(existingItem.id, updatedItem);
      return updatedItem;
    } else {
      // Add new item if product not in cart
      const id = this.cartItemIdCounter++;
      const newCartItem = { ...cartItem, id };
      this.cartItems.set(id, newCartItem);
      return newCartItem;
    }
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const cartItem = this.cartItems.get(id);
    if (!cartItem) return undefined;
    
    const updatedCartItem = { ...cartItem, quantity };
    this.cartItems.set(id, updatedCartItem);
    return updatedCartItem;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(userId: number): Promise<boolean> {
    const userCartItems = Array.from(this.cartItems.values()).filter(
      item => item.userId === userId
    );
    
    userCartItems.forEach(item => {
      this.cartItems.delete(item.id);
    });
    
    return true;
  }
}

export const storage = new MemStorage();
