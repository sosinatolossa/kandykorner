import React from "react"
import "./Product.css"
import { Link } from "react-router-dom"

export const ProductCard = ({product}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">{product.productType.name}</div>
    </section>
)