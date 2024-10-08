"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/store/cart";

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
	const router = useRouter();
	const firstItem = product.items[0];
	const isPizzaForm = Boolean(product.items[0].pizzaType);
	const addCartItem = useCartStore((state) => state.addCartItem);

	const onAddProduct = () => {
		addCartItem({
			productItemId: firstItem.id,
		});
	};

	const onAddPizza = (productItemId: number, ingredients: number[]) => {
		addCartItem({
			productItemId,
			ingredients,
		});
	};

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
						onSubmit={onAddPizza}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						onSubmit={onAddProduct}
						price={firstItem.price}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};
