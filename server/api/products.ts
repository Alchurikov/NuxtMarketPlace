import type { Product, ProductFilters } from '~/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Hoka Men's Clifton 9",
    price: 144.95,
    rating: 4,
    image: '/images/HokaGrey.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'Hoka',
    inStock: true,
    details: [
      {
        name: 'Features',

        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Brooks Ghost 15',
    price: 140.0,
    rating: 5,
    image: '/images/BrookLightGreen.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'Brooks',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'New Balance 608v5',
    price: 74.99,
    rating: 5,
    image: '/images/NewBalance.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'New Balance',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Reebok Nano X3 Froning',
    price: 150.0,
    rating: 4,
    image: '/images/Reebok.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'Reebok',
    inStock: false,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Hoka Men's Speedgoat 5",
    price: 140.0,
    rating: 5,
    image: '/images/HokaBlack.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'Hoka',
    inStock: false,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Under Armour Charged Decoy',
    price: 85.0,
    rating: 4,
    image: '/images/UnderArmorBlack.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Running',
    brand: 'Under Armour',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
          'Cushion: Balanced; designed to provide protective cushion while maintaining a responsive toe-off.',
          'Classic lace-up closure.',
          'Early stage Meta-Rocker.',
          'Extended pull tab.',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Adidas Terrex AX4',
    price: 100.0,
    rating: 5,
    image: '/images/AdidasBlue.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Hiking',
    brand: 'Adidas',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Merrell Moab 3',
    price: 120.0,
    rating: 5,
    image: '/images/MerrelGrey.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Hiking',
    brand: 'Merrell',
    inStock: false,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Columbia Peakfreak 2 Outdry',
    price: 124.95,
    rating: 4,
    image: '/images/ColumbiaBlack.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Hiking',
    brand: 'Columbia',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Cole Haan Grandpro Crew Wing Tip',
    price: 169.99,
    rating: 5,
    image: '/images/ColeHannBlack.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Walking',
    brand: 'Cole Haan',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Cole Haan Grandsport Journey Knit Sneaker',
    price: 100.0,
    rating: 3,
    image: '/images/ColeHannBlue.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Walking',
    brand: 'Cole Haan',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'Reebok Club Crew Sneaker',
    price: 100.0,
    rating: 3,
    image: '/images/ReebokWalking.jpg',
    description:
      'The Soft quiet ride that you have grown accustomed to is now improved with Up-dated DNA Loft V2 cushioning providing a smoother ride with a breathable 3D fit print upper for a seamless fit. This Neutral runner is soft and smooth for miles.',
    category: 'Walking',
    brand: 'Reebok',
    inStock: true,
    details: [
      {
        name: 'Features',
        items: [
          'Best for everyday run, walking.',
          'Engineered knit breathable upper.',
          'Recycled polyester lining and removable CMEVA footbed for enhanced cushioning.',
          'Stability: Neutral; features a symmetrical bed of cushion without additional prescriptive technologies.',
        ],
      },
    ],
  },
];
export default defineEventHandler((event) => {
  const { page = 1, limit = 3, sort, ...filters } = getQuery(event);

  let filteredProducts = [...products];

  Object.entries(filters).forEach(([key, value]) => {
    const filterValues = Array.isArray(value) ? value : [value];

    if (key === 'price') {
      filteredProducts = filteredProducts.filter((product) =>
        filterValues.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && (max ? product.price < max : true);
        })
      );
    } else if (key === 'stock') {
      filteredProducts = filteredProducts.filter((product) =>
        filterValues.includes(String(product.inStock))
      );
    } else {
      filteredProducts = filteredProducts.filter((product) =>
        filterValues.some(
          (val) =>
            String(product[key as keyof Product]).toLowerCase() ===
            val.toLowerCase()
        )
      );
    }
  });

  if (sort) {
    const [field, order] = (sort as string).split('_');
    filteredProducts.sort((a, b) => {
      if (field === 'rating' || field === 'price') {
        if (field === 'rating' && !order) {
          return b[field] - a[field];
        }
        if (order === 'desc' || !order) {
          return b[field] - a[field];
        }
        return a[field] - b[field];
      }
      if (order === 'desc') {
        return b[field as keyof Product] > a[field as keyof Product] ? 1 : -1;
      }
      return a[field as keyof Product] > b[field as keyof Product] ? 1 : -1;
    });
  }

  const startIndex = (Number(page) - 1) * Number(limit);
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + Number(limit)
  );

  return {
    products: paginatedProducts,
    total: filteredProducts.length,
    page: Number(page),
    limit: Number(limit),
  };
});
