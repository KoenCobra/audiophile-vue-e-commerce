<script lang="ts" setup>
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import * as Yup from 'yup'

import { useForm } from 'vee-validate'
import { ref } from 'vue'

const paymentType = ref('e-Money')

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
  zipCode: Yup.string().required(),
  city: Yup.string().required(),
  country: Yup.string().required()
})

const { defineComponentBinds, errors, handleSubmit, isSubmitting, setFieldValue } = useForm({
  validationSchema: schema
})

const name = defineComponentBinds('name')
const email = defineComponentBinds('email')
const phone = defineComponentBinds('phone')
const address = defineComponentBinds('address')
const zipCode = defineComponentBinds('zipCode')
const city = defineComponentBinds('city')
const country = defineComponentBinds('country')

const onSubmit = handleSubmit(() => {})
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
              <div class="label">
                <label>Name</label>
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
              </div>
              <InputText v-bind="name" type="text" placeholder="Alexei Ward" />
            </div>
            <div>
              <div class="label">
                <label>Email Address</label>
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
              </div>
              <InputText v-bind="email" type="text" placeholder="alexei@mail.com" />
            </div>
            <div>
              <div class="label">
                <label>Phone Number </label>
                <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
              </div>
              <InputText v-bind="phone" type="text" placeholder="+1 202-555-0136" />
            </div>
          </div>
        </div>
        <div class="form-inputs">
          <h4>Shipping info</h4>
          <div class="form-grid">
            <div class="form-input address">
              <div class="label">
                <label>Address</label>
                <span v-if="errors.address" class="error">{{ errors.address }}</span>
              </div>
              <InputText v-bind="address" type="text" placeholder="1137 Williams Avenue" />
            </div>
            <div>
              <div class="label">
                <label>ZIP Code</label>
                <span v-if="errors.zipCode" class="error">{{ errors.zipCode }}</span>
              </div>
              <InputText v-bind="zipCode" type="text" placeholder="10001" />
            </div>
            <div>
              <div class="label">
                <label>City</label>
                <span v-if="errors.city" class="error">{{ errors.city }}</span>
              </div>
              <InputText v-bind="city" type="text" placeholder="New York" />
            </div>
            <div>
              <div class="label">
                <label>Country</label>
                <span v-if="errors.country" class="error">{{ errors.country }}</span>
              </div>
              <InputText v-bind="country" type="text" placeholder="United States" />
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
              <label>e-Money Number</label>
              <InputText type="text" placeholder="238521993" />
            </div>
            <div v-if="paymentType === 'e-Money'">
              <label>e-Money PIN</label>
              <InputText type="text" placeholder="6891" />
            </div>
            <div class="cash" v-if="paymentType === 'cash'">
              <img src="/public/images/checkout/icon-cash-on-delivery.svg" alt="" />
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
    <button type="submit">submit</button>
  </form>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.checkout-form-section {
  background-color: $white;
  padding: 3.375rem 3rem 3rem;
  border-radius: 8px;

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
    margin-left: auto;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.214px;
  }

  .label {
    display: flex;
  }
}
</style>
