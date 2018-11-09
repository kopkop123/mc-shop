import React, {Component} from 'react'
import DropzoneComponent from 'react-dropzone-component';

class Product extends Component {
    state = {
        name: '',
        price: '',
        description: ''
    }

    onFieldChange = (e) => {
        this.setState(Object.assign({}, this.state, {
            [e.target.name]: e.target.value
        }))
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let result = true;
        for(let key in this.state) {
            if(this.state[key] === '') {
                result = false;
            }
        }

        if(result) {
            alert('Форма успешно отправлена')
        } else {
            alert('Все поля должны быть заполнены')
        }
    }

    componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: false,
        postUrl: 'https://photosp.ru/api/1/upload/'
    }

    render() {
        return (
            <div className="container">
                <div className="page">
                    <h2 className="page__title">Product</h2>

                    <div className="page__wrap">
                        <form className="form" onSubmit={this.onFormSubmit}>
                            <label className="form__row">
                                <span className="form__label">Name</span>
                                <input
                                    className="form__input"
                                    type="text"
                                    name="name"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Category</span>
                                <select name="category" className="form__input">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </label>

                            <label className="form__row">
                                <span className="form__label">Price</span>
                                <input
                                    className="form__input"
                                    type="number"
                                    name="price"
                                    onChange={this.onFieldChange}
                                />
                            </label>

                            <label className="form__row">
                                <span className="form__label">Description</span>
                                <textarea className="form__input" name="description" onChange={this.onFieldChange}></textarea>
                            </label>

                            <DropzoneComponent
                                config={this.componentConfig}
                                eventHandlers={this.eventHandlers}
                                djsConfig={this.djsConfig}
                            />

                            <div className="form__bottom">
                                <input className="form__submit" type="submit" value="Save"/>
                                <button className="form__submit" type="button">Save and New</button>
                                <button className="form__submit" type="button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product