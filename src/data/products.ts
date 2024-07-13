export interface Product {
    productId: string;
    name: string;
    image: string[];
    description: string;
    category: string;
    original_price: number;
    discounted_price?: number;
    isNew: boolean;
    tags: string[];
    size: string[];
}


const products: Product[] = [
    {
        productId: "abcdef",
        name: "Lounge Chair",
        category: "Chair",
        original_price: 2200,
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        discounted_price: 1870,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Embrace relaxation with our Lounge Chair, a perfect blend of style and comfort. Crafted with plush cushions and a sturdy frame, it offers optimal support for hours of lounging. Ideal for both modern and traditional interiors, this chair adds a touch of sophistication to any room. Whether placed in your living room or bedroom, its timeless design and durable upholstery ensure lasting elegance. Available in various sizes, it caters to different space requirements. Elevate your home decor with this versatile piece that invites you to unwind in style."
    },
    {
        productId: "bcdefg",
        name: "Royal Leather Sofa",
        image: ['https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Sofa",
        original_price: 3000,
        discounted_price: 2550,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Experience luxury with our Royal Leather Sofa, designed to exude elegance and comfort. Upholstered in premium leather and featuring exquisite detailing, it offers a regal charm to any living space. The deep cushions provide exceptional support, ensuring a cozy lounging experience. Perfect for entertaining guests or relaxing with family, this sofa combines timeless design with modern functionality. Available in multiple sizes, it accommodates various room layouts. Elevate your home decor with this statement piece that reflects your discerning taste and enhances the ambiance of your living room."
    },
    {
        productId: "cdefgh",
        name: "Elegance Table",
        image: ['https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Table",
        original_price: 3500,
        discounted_price: 2975,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Enhance your dining experience with our Elegance Table, a perfect blend of style and functionality. Crafted from high-quality materials, it features a sleek design that complements any decor. Whether hosting intimate dinners or festive gatherings, this table provides ample space and durability. Its versatile design makes it suitable for both indoor and outdoor use. Available in various sizes, it accommodates different seating arrangements and room sizes. Upgrade your dining area with this elegant piece that promises to be the focal point of your home, combining practicality with timeless appeal."
    },
    {
        productId: "defghi",
        name: "Imperial Sofa",
        category: "Sofa",
        image: ['https://i.postimg.cc/sDX20LXW/sofa.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        original_price: 4500,
        discounted_price: 3825,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Indulge in luxury with our Imperial Sofa, a masterpiece of craftsmanship and comfort. Upholstered in premium fabric and featuring intricate detailing, it adds a touch of opulence to your living space. The generous seating and plush cushions offer unparalleled comfort, making it perfect for relaxation and socializing. Whether placed in a contemporary or traditional setting, this sofa elevates the ambiance with its majestic presence. Available in various sizes, it adapts to different room layouts and preferences. Transform your living room into a sanctuary of style and relaxation with this iconic piece that defines sophistication."
    },
    {
        productId: "efghij",
        name: "Crystal Chandelier",
        image: ['https://i.postimg.cc/WpS38V2j/night-lamp.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Lamp",
        original_price: 1500,
        discounted_price: 1200,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Illuminate your space with our Crystal Chandelier, a dazzling centerpiece that adds glamour and elegance. Crafted with precision-cut crystals and a polished metal frame, it creates a mesmerizing play of light and shadows. Ideal for enhancing dining rooms, entryways, or bedrooms, this chandelier makes a statement with its timeless design and luxurious appeal. Adjustable chain length allows for versatile installation, adapting to various ceiling heights and room sizes. Elevate your home decor with this exquisite piece that exudes sophistication and transforms any room into a luminous sanctuary."
    },
    {
        productId: "fghijk",
        name: "Home Decoration",
        category: "Decoration",
        image: ['https://i.postimg.cc/43z49k8D/cute-bed-set.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        original_price: 1800,
        discounted_price: 1530,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Add charm and personality to your living space with our Home Decoration items. From decorative accents to statement pieces, each item is crafted with attention to detail and quality materials. Whether you're enhancing your bedroom, living room, or study, our collection offers something for every corner of your home. Choose from a variety of styles and themes to suit your taste and interior decor. Transform your space into a haven of comfort and style with our curated selection of home decor essentials."
    },
    {
        productId: "ghijkl",
        name: "Noble Side Table",
        image: ['https://i.postimg.cc/hGFPvP08/beautiful-sofa.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Table",
        original_price: 950,
        discounted_price: 760,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Enhance your living space with our Noble Side Table, a versatile piece that combines elegance with practicality. Crafted from premium materials, it features a timeless design that complements any decor style. Whether used as a bedside table or an accent piece in your living room, its sturdy construction and spacious surface provide functionality and aesthetic appeal. Available in multiple finishes, it allows you to personalize your space with a touch of sophistication and convenience."
    },
    {
        productId: "hijklm",
        name: "Regal Floor Lamp",
        category: "Lamp",
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        original_price: 1100,
        discounted_price: 935,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Brighten up your room with our Regal Floor Lamp, designed to illuminate your space with style and elegance. Featuring a sleek silhouette and premium materials, it adds a touch of sophistication to any decor. Whether placed in your living room, bedroom, or office, its adjustable design allows for customizable lighting options. The sturdy base ensures stability, while the integrated dimmer switch provides convenience. Transform your home into a cozy retreat with this timeless piece that combines functionality with exquisite craftsmanship."
    },
    {
        productId: "ijklmn",
        name: "Majestic Velvet Armchair",
        category: "Chair",
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        original_price: 1200,
        discounted_price: 960,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Experience luxury and comfort with our Majestic Velvet Armchair, a statement piece for any interior. Upholstered in sumptuous velvet and featuring a classic design, it combines style with ergonomic support. Whether placed in a cozy corner or as a focal point in your living room, its plush cushions and sturdy frame ensure lasting comfort. Available in multiple colors, it allows you to personalize your space while adding a touch of sophistication. Transform your home decor with this timeless armchair that promises relaxation and elegance."
    },
    {
        productId: "jklmno",
        name: "Grand Dining Set",
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Table",
        original_price: 5000,
        discounted_price: 4250,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Create memorable dining experiences with our Grand Dining Set, a masterpiece of craftsmanship and sophistication. Featuring a spacious table and comfortable chairs, it offers elegance and functionality for family gatherings or entertaining guests. Crafted from high-quality materials, it ensures durability and style that lasts for years. Whether hosting formal dinners or casual meals, this dining set elevates your dining area with its timeless design and luxurious appeal. Treat yourself and your loved ones to an exquisite dining experience with our meticulously curated set that complements any decor."
    },
    {
        productId: "klmnop",
        name: "Exquisite Silk Throw Pillow",
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Chair",
        original_price: 300,
        discounted_price: 240,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Add a touch of luxury to your living space with our Exquisite Silk Throw Pillow, crafted from premium silk for softness and durability. Perfect for enhancing sofas, beds, or armchairs, it combines comfort with elegance. Whether used as a decorative accent or for lumbar support, its hypoallergenic filling ensures comfort and support. Available in a variety of colors and patterns, it allows you to personalize your space while adding sophistication. Elevate your home decor with this versatile throw pillow that complements any interior style and enhances the ambiance of your room."
    },
    {
        productId: "lmnopq",
        name: "Gilded Leather Ottoman",
        image: ['https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png','https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png','https://i.postimg.cc/QxyMLq9y/outdoor-bar-table.png'],
        category: "Chair",
        original_price: 800,
        discounted_price: 680,
        isNew: false,
        tags: ["sofa", "home", "decoration"],
        size: ["sm", "md", "lg", "xl"],
        description: "Transform your living space with our Gilded Leather Ottoman, a blend of opulence and comfort. Upholstered in premium leather and adorned with intricate gilded detailing, it adds a touch of luxury to any room. Whether used as a footrest or extra seating, its cushioned top offers support and style. The sturdy base ensures stability, while its compact design fits seamlessly into various decor settings. Available in multiple colors, it allows you to customize your space with elegance. Enhance your home decor with this versatile ottoman that combines functionality with timeless beauty."
    }
];


export const findProduct = (productId: string) => {
    const targetProduct = products.find(product => {
        return product.productId === productId;
    })
    return targetProduct;
}

export default products;
