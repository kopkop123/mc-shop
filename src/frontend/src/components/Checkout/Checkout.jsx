import React, { Component } from 'react'
import classes from './Checkout.less'

class Checkout extends Component {
    render() {
        return (
            <div className="container">
                <div className="checkout">
                    <div className="main">
                        <div className="main__header">
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item breadcrumb__item--completed">
                                    <a href="#" className="breadcrumb__link">Cart</a>&nbsp;&gt;&nbsp;
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--current">
                                    <span className="breadcrumb__text">Customer information</span>&nbsp;&gt;&nbsp;
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--blank">
                                    <span className="breadcrumb__text">Shipping method</span>&nbsp;&gt;&nbsp;
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--blank">
                                    <span className="breadcrumb__text">Payment method</span>
                                </li>
                            </ul>

                            <div>
                                <div className="dynamic-checkout">
                                    <h2 className="dynamic-checkout__title">
                                        Express checkout
                                    </h2>

                                    <div className="dynamic-checkout__content">
                                        <button type="button" className="dynamic-checkout__paypal">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg==" alt="Paypal"/>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg==" alt="Paypal"/>
                                        </button>
                                    </div>
                                    <div className="alternative-payment-separator">
                                        <span className="alternative-payment-separator__content">or</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main__content">
                            <div className="step">
                                <form className="edit_checkout">
                                    <div className="step__sections">
                                        <div className="section section--contact-information">
                                            <div className="section__header">
                                                <div className="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
                                                    <h2 className="section__title layout-flex__item layout-flex__item--stretch">Contact information</h2>
                                                    <p className="layout-flex__item">
                                                        <span>Already have an account?</span> <a href="#">Log in</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="section__content">
                                                <div className="fieldset">
                                                    <div className="field field--required">
                                                        <div className="field__input-wrapper">
                                                            <label htmlFor="checkout_email"
                                                                   className="field__label field__label--visible">Email</label>
                                                            <input type="email" placeholder="Email" className="field__input"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="fieldset-description">
                                                    <div className="section__content">
                                                        <div className="checkbox-wrapper">
                                                            <div className="checkbox__input">
                                                                <input type="checkbox" className="input-checkbox" id="checkout_buyer_accepts_marketing"/>
                                                            </div>
                                                            <label className="checkbox__label"
                                                                   htmlFor="checkout_buyer_accepts_marketing">
                                                                Keep me up to date on news and exclusive offers
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section section--shipping-address">
                                            <div className="section__header">
                                                <h2 className="section__title">
                                                    Shipping address
                                                </h2>
                                            </div>

                                            <div className="section__content">
                                                <div className="fieldset">
                                                    <div className="field field--required field--half">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_first_name">First
                                                                name</label>
                                                            <input placeholder="First name" className="field__input"
                                                                   type="text"
                                                                   id="checkout_shipping_address_first_name"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required field--half">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_last_name">Last
                                                                name</label>
                                                            <input placeholder="Last name"
                                                                   className="field__input" type="text"
                                                                   id="checkout_shipping_address_last_name"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--optional">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_company">Company
                                                                (optional)</label>
                                                            <input placeholder="Company (optional)" className="field__input"
                                                                   size="30" type="text"
                                                                   id="checkout_shipping_address_company"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_address1">Address</label>
                                                            <input placeholder="Address"
                                                                   className="field__input" size="30" type="text"
                                                                   id="checkout_shipping_address_address1"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--optional">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_address2">Apartment,
                                                                suite, etc. (optional)</label>
                                                            <input placeholder="Apartment, suite, etc. (optional)" className="field__input"
                                                                   size="30" type="text"
                                                                   id="checkout_shipping_address_address2"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_city">City</label>
                                                            <input placeholder="City" className="field__input" size="30" type="text"
                                                                   id="checkout_shipping_address_city"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required field--third field--show-floating-label">
                                                        <div className="field__input-wrapper field__input-wrapper--select">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_country">Country</label>
                                                            <select size="1"
                                                                    className="field__input field__input--select"
                                                                    id="checkout_shipping_address_country">
                                                                <option data-code="AU" value="Australia">Australia
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required field--show-floating-label field--third">
                                                        <div className="field__input-wrapper field__input-wrapper--select">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_province">State/territory</label>
                                                            <select placeholder="Region"
                                                                    className="field__input field__input--select"
                                                                    id="checkout_shipping_address_province">
                                                                <option disabled="">State/territory</option>
                                                                <option
                                                                    value="ACT">Australian Capital Territory
                                                                </option>
                                                                <option
                                                                    value="NSW">New South Wales
                                                                </option>
                                                                <option
                                                                    value="NT">Northern Territory
                                                                </option>
                                                                <option
                                                                        value="QLD">Queensland
                                                                </option>
                                                                <option
                                                                    value="SA">South Australia
                                                                </option>
                                                                <option
                                                                        value="TAS">Tasmania
                                                                </option>
                                                                <option
                                                                        value="VIC">Victoria
                                                                </option>
                                                                <option
                                                                    value="WA">Western Australia
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required field--third">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_zip">Postcode</label>
                                                            <input placeholder="Postcode"
                                                                   className="field__input field__input--zip" size="30" type="text"
                                                                   id="checkout_shipping_address_zip"/>
                                                        </div>
                                                    </div>

                                                    <div className="field field--required">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_shipping_address_phone">Phone</label>
                                                            <input placeholder="Phone"
                                                                   className="field__input field__input--numeric" size="30" type="tel"
                                                                   id="checkout_shipping_address_phone"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="step__footer">
                                        <button type="submit" className="step__footer__continue-btn btn">
                                            <span className="btn__content">
                                                Continue to shipping method
                                              </span>
                                        </button>

                                        <a href="#" className="step__footer__previous-link">
                                            &lt; <span className="step__footer__previous-link-content">Return to cart</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="sidebar__content">
                            <div className="order-summary order-summary--is-collapsed">
                                <div className="order-summary__sections">
                                    <div className="order-summary__section order-summary__section--product-list">
                                        <div className="order-summary__section__content">
                                            <table className="product-table">
                                                <tr className="product">
                                                    <td className="product__image">
                                                        <div className="product-thumbnail">
                                                            <div className="product-thumbnail__wrapper">
                                                                <img alt="Hot and Spicy Nuts - Raw Trader Cafe"
                                                                     className="product-thumbnail__image"
                                                                     src="https://cdn.shopify.com/s/files/1/1208/1394/products/Hot_Spicy_1000px_small.jpg?13523773551294046894"/>
                                                            </div>
                                                            <span className="product-thumbnail__quantity">1</span>
                                                        </div>
                                                    </td>

                                                    <td className="product__description">
                                                        <span className="product__description__name order-summary__emphasis">Hot and Spicy Nuts</span>
                                                        <span className="product__description__variant order-summary__small-text">200g</span>
                                                    </td>

                                                    <td className="product__quantity visually-hidden">1</td>
                                                    <td className="product__price">
                                                        <span className="order-summary__emphasis">$15.00</span>
                                                    </td>
                                                </tr>

                                                <tr className="product">
                                                    <td className="product__image">
                                                        <div className="product-thumbnail">
                                                            <div className="product-thumbnail__wrapper">
                                                                <img alt="Hot and Spicy Nuts - Raw Trader Cafe"
                                                                     className="product-thumbnail__image"
                                                                     src="https://cdn.shopify.com/s/files/1/1208/1394/products/Hot_Spicy_1000px_small.jpg?13523773551294046894"/>
                                                            </div>
                                                            <span className="product-thumbnail__quantity">1</span>
                                                        </div>
                                                    </td>

                                                    <td className="product__description">
                                                        <span className="product__description__name order-summary__emphasis">Hot and Spicy Nuts</span>
                                                        <span className="product__description__variant order-summary__small-text">200g</span>
                                                    </td>

                                                    <td className="product__quantity visually-hidden">1</td>
                                                    <td className="product__price">
                                                        <span className="order-summary__emphasis">$15.00</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="order-summary__section order-summary__section--discount">
                                        <form className="edit_checkout animate-floating-labels">
                                            <div className="fieldset">
                                                <div className="field">
                                                    <div className="field__input-btn-wrapper">
                                                        <div className="field__input-wrapper">
                                                            <label className="field__label field__label--visible"
                                                                   htmlFor="checkout_reduction_code">Discount</label>
                                                            <input placeholder="Discount" className="field__input" size="30"
                                                                   type="text"
                                                                   id="checkout_reduction_code"/>
                                                        </div>

                                                        <button type="submit" className="field__input-btn btn btn--disabled">
                                                            <span className="btn__content visually-hidden-on-mobile">Apply</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="order-summary__section order-summary__section--total-lines">
                                        <table className="total-line-table">
                                            <tbody className="total-line-table__tbody">
                                                <tr className="total-line total-line--subtotal">
                                                    <th className="total-line__name">Subtotal</th>
                                                    <td className="total-line__price">
                                                        <span className="order-summary__emphasis">$155.00</span>
                                                    </td>
                                                </tr>

                                                <tr className="total-line total-line--shipping">
                                                    <th className="total-line__name">Shipping</th>
                                                    <td className="total-line__price">
                                                        <span className="order-summary__small-text">
                                                          Calculated at next step
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>

                                            <tfoot className="total-line-table__footer">
                                                <tr className="total-line">
                                                    <th className="total-line__name payment-due-label" scope="row">
                                                        <span className="payment-due-label__total">Total</span>
                                                        <span className="payment-due-label__taxes">
                                                            Including <span>$14.09</span> in taxes
                                                          </span>
                                                    </th>
                                                    <td className="total-line__price payment-due">
                                                        <span className="payment-due__currency">AUD</span>
                                                        <span className="payment-due__price">
                                                          $155.00
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout