<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import * as Yup from 'yup'
import { useCartStore } from '@/stores/cartStore'
import { useForm } from 'vee-validate'
import { computed, ref, watchEffect } from 'vue'

const paymentType = ref('e-Money')
const cartStore = useCartStore()
const validationSchema = ref()

watchEffect(() => {
  validationSchema.value = computed(() => {
    const baseSchema = {
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Wrong format').required('Email is required'),
      phone: Yup.number().typeError('Should be a number').required('Phone is required'),
      address: Yup.string().required('Address is required'),
      zipCode: Yup.number().typeError('Should be a number').required('Zip code is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
      eMoney: Yup.number(),
      eMoneyPin: Yup.number()
    }

    if (paymentType.value === 'e-Money') {
      baseSchema.eMoney = Yup.number()
        .typeError('Should be a number')
        .required('e-Money number is required')
      baseSchema.eMoneyPin = Yup.number()
        .typeError('Should be a number')
        .required('e-Money pin is required')
    }

    return Yup.object().shape(baseSchema)
  })
})

const { defineComponentBinds, errors, handleSubmit } = useForm({
  validationSchema: validationSchema.value
})

const name = defineComponentBinds('name')
const email = defineComponentBinds('email')
const phone = defineComponentBinds('phone')
const address = defineComponentBinds('address')
const zipCode = defineComponentBinds('zipCode')
const city = defineComponentBinds('city')
const country = defineComponentBinds('country')
const eMoney = defineComponentBinds('eMoney')
const eMoneyPin = defineComponentBinds('eMoneyPin')

const onSubmit = handleSubmit(() => {
  cartStore.dialogVisible = true
})

defineExpose({ onSubmit })
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="checkout-form-section">
      <h1>Checkout</h1>
      <div class="checkout-form">
        <div class="form-inputs">
          <h4>Billing details</h4>
          <div class="form-grid">
            <div>
              <div :class="{ error: errors.name }" class="label">
                <label>Name</label>
                <span v-if="errors.name">{{ errors.name }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.name }"
                v-bind="name"
                type="text"
                placeholder="Alexei Ward"
              />
            </div>
            <div>
              <div :class="{ error: errors.email }" class="label">
                <label>Email Address</label>
                <span v-if="errors.email">{{ errors.email }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.email }"
                v-bind="email"
                type="email"
                placeholder="alexei@mail.com"
              />
            </div>
            <div>
              <div :class="{ error: errors.phone }" class="label">
                <label>Phone Number </label>
                <span v-if="errors.phone">{{ errors.phone }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.phone }"
                v-bind="phone"
                type="tel"
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>
        </div>
        <div class="form-inputs">
          <h4>Shipping info</h4>
          <div class="form-grid">
            <div class="form-input address">
              <div :class="{ error: errors.address }" class="label">
                <label>Address</label>
                <span v-if="errors.address">{{ errors.address }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.address }"
                v-bind="address"
                type="text"
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div>
              <div :class="{ error: errors.zipCode }" class="label">
                <label>ZIP Code</label>
                <span v-if="errors.zipCode">{{ errors.zipCode }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.zipCode }"
                v-bind="zipCode"
                type="number"
                placeholder="10001"
              />
            </div>
            <div>
              <div :class="{ error: errors.city }" class="label">
                <label>City</label>
                <span v-if="errors.city">{{ errors.city }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.city }"
                v-bind="city"
                type="text"
                placeholder="New York"
              />
            </div>
            <div>
              <div :class="{ error: errors.country }" class="label">
                <label>Country</label>
                <span v-if="errors.country">{{ errors.country }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.country }"
                v-bind="country"
                type="text"
                placeholder="United States"
              />
            </div>
          </div>
        </div>
        <div class="form-inputs">
          <h4>Payment details</h4>
          <div class="form-grid">
            <div>
              <label>Payment Method</label>
            </div>
            <div class="radio-inputs">
              <div class="radio-input">
                <RadioButton v-model="paymentType" name="e-Money" value="e-Money" />
                <label>e-Money</label>
              </div>
              <div class="radio-input">
                <RadioButton v-model="paymentType" name="Cash on Delivery" value="cash" />
                <label>Cash on Delivery</label>
              </div>
            </div>

            <div v-if="paymentType === 'e-Money'">
              <div :class="{ error: errors.eMoney }" class="label">
                <label>e-Money Number</label>
                <span v-if="errors.eMoney">{{ errors.eMoney }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.eMoney }"
                v-bind="eMoney"
                type="number"
                placeholder="238521993"
              />
            </div>
            <div v-if="paymentType === 'e-Money'">
              <div :class="{ error: errors.eMoneyPin }" class="label">
                <label>e-Money PIN</label>
                <span v-if="errors.eMoneyPin">{{ errors.eMoneyPin }}</span>
              </div>
              <InputText
                :class="{ 'input-error': errors.eMoneyPin }"
                v-bind="eMoneyPin"
                type="number"
                placeholder="6891"
              />
            </div>
            <div class="cash" v-if="paymentType === 'cash'">
              <img src="/images/checkout/icon-cash-on-delivery.svg" alt="" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                arrives at your residence. Just make sure your address is correct so that your order
                will not be cancelled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.checkout-form-section {
  background-color: $white;
  padding: 3.375rem 3rem 3rem;
  border-radius: 8px;

  @media (max-width: 850px) {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
  }
  .checkout-form {
    display: grid;
    gap: 3.5rem;
    .form-inputs {
      h4 {
        font-size: 0.8125rem;
        color: $orange;
        font-weight: 700;
        letter-spacing: 0.929px;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .form-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 850px) {
          grid-template-columns: 1fr;
        }

        .address {
          grid-column: 1 / -1;
        }
      }

      .radio-inputs {
        display: grid;
        gap: 1rem;
        .radio-input {
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid $inputBorder;
          border-radius: 8px;
          padding: 1.094rem 1rem;

          label {
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: -0.25px;
          }
        }
      }

      input {
        border-radius: 8px;
        border: 1px solid $inputBorder;
        width: 100%;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: -0.25px;
        caret-color: $orange;

        &:focus {
          border: 1px solid $orange;
        }

        &.input-error {
          border: 2px solid #cd2c2c;
        }
      }

      label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: -0.214px;
      }

      ::placeholder {
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: -0.25px;
        opacity: 0.4;
      }
    }
  }

  .cash {
    display: flex;
    align-items: center;
    gap: 2rem;
    grid-column: 1/-1;
    margin-top: 1.5rem;

    p {
      font-size: 0.9375rem;
      font-weight: 500;
      opacity: 0.5;
    }
  }

  .error {
    color: #cd2c2c;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.214px;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }
}
</style>
