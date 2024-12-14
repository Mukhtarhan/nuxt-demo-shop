<script setup>
import { inject } from "vue";

const isopen = inject("isopen");
const { items } = useCart();
</script>

<template>
    <div class="fixed z-10 top-0 h-full w-full bg-black opacity-70" />
    <div
        class="flex flex-col justify-between fixed h-full z-10 top-0 h-full right-0 w-100 bg-white px-10 py-7"
    >
        <h2 class="text-2xl font-bold mb-10 flex items-center gap-5">
            <svg
                @click="isopen = !isopen"
                class="rotate-180 hover:-translate-x-1 opacity-30 hover:opacity-100 transition cursor-pointer"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 7H14.7143"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.71436 1L14.7144 7L8.71436 13"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            Корзина
        </h2>
        <div
            class="flex flex-col flex-1 justify-between"
            v-if="items.length == 0"
        >
            <span>Корзина пуста</span>
        </div>
        <div class="flex flex-col flex-1 justify-between" v-else>
            <div
                class="flex flex-col gap-5"
                v-for="item in items"
                :key="item.product.id"
            >
                <CartItem :item="item" />
            </div>
            <div>
                <div class="flex flex-col gap-5" v-if="!(items.length === 0)">
                    <div class="flex items-end gap-2">
                        <span>Итого:</span>
                        <div class="flex-1 border-b border-dashed" />
                        <span class="font-bold"
                            >{{
                                formatPrice(
                                    items.reduce(
                                        (acc, item) =>
                                            acc +
                                            item.product.price * item.quantity,
                                        0
                                    )
                                )
                            }}.</span
                        >
                    </div>

                    <div class="flex items-end gap-2">
                        <span>Налог 5%:</span>
                        <div class="flex-1 border-b border-dashed" />
                        <span class="font-bold">{{
                            formatPrice(
                                items.reduce(
                                    (acc, item) =>
                                        acc +
                                        item.product.price * item.quantity,
                                    0
                                ) * 1.05
                            )
                        }}</span>
                    </div>
                </div>

                <button
                    v-if="items.length > 0"
                    class="flex justify-center items-center gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600"
                >
                    <NuxtLink to="/cart">Оформить заказ</NuxtLink>
                    <img src="../assets/arrow-next.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    </div>
</template>
