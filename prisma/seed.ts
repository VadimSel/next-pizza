import { hashSync } from "bcrypt"
import { prisma } from "./prisma-client"
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
    productId,
    pizzaType,
    size
}: {
    productId: number,
    pizzaType?: 1 | 2,
    size?: 20 | 30 | 40
}) => {
    return {
        productId,
        price: randomDecimalNumber(190, 600),
        pizzaType,
        size,
    } as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: "user@test.ru",
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: "admin@test.ru",
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    })

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пепперони фреш',
            imageUrl: '../public/assets/pizzas-images/pepperonifresh.avif',
            categoryId: 1,
            ingredient: {
                connect: ingredients.slice(0, 5)
            }
        }
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Сырная',
            imageUrl: '../public/assets/pizzas-images/syrnaya.avif',
            categoryId: 1,
            ingredient: {
                connect: ingredients.slice(5, 10)
            }
        }
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Чоризо фреш',
            imageUrl: '../public/assets/pizzas-images/chorizofresh.avif',
            categoryId: 1,
            ingredient: {
                connect: ingredients.slice(10, 40)
            }
        }
    });

    await prisma.productItem.createMany({
        data: [
            generateProductItem(
                {
                    productId: pizza1.id,
                    pizzaType: 2,
                    size: 30,
                }
            )
        ]
    })

    await prisma.productItem.createMany({
        data: [
            // Пицца "Пепперони фреш"
            generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

            // Пицца "Сырная"
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

            // Пицца "Чоризо фреш"
            generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });