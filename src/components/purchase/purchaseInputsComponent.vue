<script setup>
import OrderInput from "@/UI/OrderInput.vue";
</script>
<template>
  <div class="flex flex-col gap-5">
    <h5 class="font-[Raleway] font-base/6 opacity-55">Тип плательщика</h5>
    <div class="inputs flex flex-row items-center gap-7">
      <div class="input flex flex-row items-center gap-2">
        <input
          :class="[
            'appearance-none w-6 h-6 rounded-full shrink-0',
            personType === '1'
              ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
              : 'border border-solid border-light-35',
          ]"
          type="radio"
          id="phys"
          v-model="personType"
          value="1"
        />
        <div
          class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
        ></div>
        <label for="phys">Физическое лицо</label>
      </div>
      <div class="input flex flex-row gap-2 items-center">
        <input
          :class="[
            'appearance-none w-6 h-6 rounded-full shrink-0',
            personType === '2'
              ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
              : 'border border-solid border-light-35',
          ]"
          type="radio"
          id="law"
          v-model="personType"
          value="2"
        />
        <div
          class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
        ></div>
        <label for="law">Юридическое лицо</label>
      </div>
    </div>

    <h5 class="font-[Raleway] font-base/6 opacity-55">Местоположение</h5>
    <input
      class="w-full bg-light-35 py-4 px-5 rounded font-[Raleway] text-sm/4 font-normal text-light-46"
      placeholder="Астана , Астана , Казахстан"
      type="text"
    />
    <h5>Индекс</h5>
    <input
      class="w-full border border-solid border-light-35 py-3 px-5 rounded"
      placeholder="10100"
      type="number"
      min="0"
    />
    <h6 class="font-[Raleway] text-xs/6 text-dark-1 opacity-55">
      Выберите свой город в списке. Если вы не нашли свой город выберите “другое
      местоположение”. а город впишите в поле “Город”
    </h6>

    <div class="flex flex-row gap-2 w-full">
      <div
        class="flex flex-col py-6 px-2 border border-solid border-light-35 rounded gap-7 w-1/3"
      >
        <h3 class="text-dark-05 font-semibold text-[30px]/[39px]">Доставка</h3>
        <h5 class="font-[Raleway] text-base/6 text-dark-1 opacity-55">
          Выберите способ доставки
        </h5>
        <div class="inputs flex flex-row gap-7 items-center w-full">
          <div class="flex flex-row gap-2 items-center">
            <input
              :class="[
                'appearance-none w-6 h-6 rounded-full shrink-0',
                deliveryType === '1'
                  ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
                  : 'border border-solid border-light-35',
              ]"
              type="radio"
              name=""
              id="delivery"
              v-model="deliveryType"
              value="1"
            />
            <div
              class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
            ></div>
            <label class="text-nowrap" for="delivery">Служба доставки</label>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <input
              :class="[
                'appearance-none w-6 h-6 rounded-full shrink-0',
                deliveryType === '2'
                  ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
                  : 'border border-solid border-light-35',
              ]"
              type="radio"
              name=""
              id="samovyvoz"
              value="2"
              v-model="deliveryType"
            />
            <div
              class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
            ></div>
            <label for="samovyvoz">Самовывоз</label>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col py-6 px-2 border border-solid border-light-35 rounded gap-7 w-2/3"
      >
        <h3 class="text-dark-05 font-semibold text-[30px]/[39px]">Оплата</h3>
        <h5 class="font-[Raleway] text-base/6 text-dark-1 opacity-55">
          Выберите способ оплаты
        </h5>
        <div class="inputs flex flex-row gap-7 items-center">
          <div class="flex flex-row gap-2 items-center">
            <input
              :class="[
                'appearance-none w-6 h-6 rounded-full shrink-0',
                payType === '1'
                  ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
                  : 'border border-solid border-light-35',
              ]"
              type="radio"
              name=""
              id="Card"
              v-model="payType"
              value="1"
            />
            <div
              class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
            ></div>
            <label for="Card">Картой</label>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <input
              :class="[
                'appearance-none w-6 h-6 rounded-full shrink-0',
                payType === '2'
                  ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
                  : 'border border-solid border-light-35',
              ]"
              type="radio"
              name=""
              id="Cash"
              value="2"
              v-model="payType"
            />
            <div
              class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
            ></div>
            <label for="Cash">Наличными</label>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <input
              :class="[
                'appearance-none w-6 h-6 rounded-full shrink-0',
                payType === '3'
                  ? 'bg-gradient-to-tr from-gradient-1 to-gradient-2'
                  : 'border border-solid border-light-35',
              ]"
              type="radio"
              name=""
              id="remoteCard"
              value="3"
              v-model="payType"
            />
            <div
              class="absolute w-3 h-3 bg-white rounded-full ml-[6px] pointer-events-none"
            ></div>
            <label for="remoteCard">Удаленная оплата</label>
          </div>
        </div>
      </div>
    </div>

    <div class="form flex flex-col w-2/3 gap-2">
      <div class="flex flex-row w-full gap-5">
        <OrderInput title="Имя" placeholder="Имя" class="w-1/2" />
        <OrderInput title="Фамилия" placeholder="Фамилия" class="w-1/2" />
      </div>
      <OrderInput title="Email" placeholder="sadvakasov.rakhat@gmail.com" />
      <OrderInput title="Телефон" placeholder="sadvakasov.rakhat@gmail.com" />
      <div class="flex flex-col gap-5">
        <h5 class="font-[Raleway] font-base/6 opacity-55">Местоположение</h5>
        <input
          class="w-full bg-light-35 py-4 px-5 rounded font-[Raleway] text-sm/4 font-normal text-light-46"
          placeholder="Астана , Астана , Казахстан"
          type="text"
        />
      </div>
      <div class="flex flex-col gap-1">
        <h5 class="font-[Raleway] font-medium font-base/7 opacity-55">
          Описание
        </h5>
        <textarea
          class="w-full min-h-35 resize-none border border-solid border-light-35 rounded-xl p-5 font-[Raleway] font-medium text-base/7 placeholder:text-light-46"
          placeholder="Напиши о себе"
          name=""
          id=""
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PurchaseInputsComponent",
  components: { OrderInput },
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
