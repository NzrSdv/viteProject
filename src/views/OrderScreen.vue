<script setup>
import PurchaseInputsComponent from "@/components/purchase/purchaseInputsComponent.vue";
</script>
<template>
  <main class="main">
    <section class="section--gap">
      <div class="container">
        <div class="flex flex-row w-full gap-7 items-start">
          <div class="left flex flex-col gap-8 w-2/3">
            <h2 class="section--title">Покупатель и регион</h2>
            <PurchaseInputsComponent/>
          </div>
          <div
            class="right flex flex-col gap-11 py-4 px-7 pb-11 border border-solid border-light-44 w-1/3 rounded-lg"
          >
            <div class="flex flex-row justify-between items-center">
              <h4 class="font-[Raleway] font-bold text-xs/5 text-dark-1">
                Ваш заказ
              </h4>
              <button class="font-[Raleway] font-bold text-xs/5 text-dark-45">
                Изменить
              </button>
            </div>

            <div class="flex flex-col gap-5 w-full">
              <div class="flex flex-row justify-between items-start b w-full">
                <div class="left flex flex-col w-5/9">
                  <h3
                    class="font-[Raleway] font-semibold text-base/5 text-dark-1"
                  >
                    Комфорт 4 дуб сонома белый без ящика
                  </h3>
                  <h5
                    class="font-[Raleway] font-normal text-[10px]/3 text-dark-45"
                  >
                    Код Товара: Fn-0026
                  </h5>
                </div>
                <div class="right">
                  <h5
                    class="font-[Plus_Jakarta_Sans] font-bold text-base/5 text-dark-1"
                  >
                    755000₸
                  </h5>
                </div>
              </div>
              <div class="flex flex-row justify-between items-start b w-full">
                <div class="left flex flex-col w-5/9">
                  <h3 class="font-[Raleway] font-medium text-sm/5 text-dark-05">
                    НДС (12%, включен в цену):
                  </h3>
                </div>
                <div class="right">
                  <h5
                    class="font-[Plus_Jakarta_Sans] font-medium text-base/5 text-dark-1 opacity-50"
                  >
                    1350₸
                  </h5>
                </div>
              </div>
              <div class="flex flex-row justify-between items-start b w-full">
                <div class="left flex flex-col w-5/9">
                  <h3
                    class="font-[Raleway] font-medium text-sm/5 text-dark-05 border-b border-soild border-transparent-border pb-3"
                  >
                    Доставка
                  </h3>
                </div>
                <div class="right">
                  <h5
                    class="font-[Plus_Jakarta_Sans] font-medium text-base/5 text-dark-1 opacity-50"
                  >
                    3000₸
                  </h5>
                </div>
              </div>
              <div class="flex flex-row justify-between items-start b w-full">
                <div class="left flex flex-col w-5/9">
                  <h3
                    class="font-[Raleway] font-bold text-base/5 text-dark-1"
                  >
                    Итого:
                  </h3>
                </div>
                <div class="right">
                  <h5
                    class="font-[Plus_Jakarta_Sans] font-bold text-base/5 text-dark-1"
                  >
                    755000₸
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: { PurchaseInputsComponent, },
  data() {
    return {
      personType: "1",
      deliveryType: "1",
      payType: "1",
    };
  },
};
</script>
<style></style>
