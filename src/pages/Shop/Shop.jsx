import React, { useState } from "react";
import Visa from '../../assets/visa.webp'
import ProductCard from '../../components/Product/ProductCard.jsx'
import keyboardImage from '../../assets/products/stylos_keyboard.jpg'
import hardDiskImage from '../../assets/products/seagate_hdd.jpg'
import solidStateImage from '../../assets/products/adata_ssd.jpg'
import screenCleanerImage from '../../assets/products/vorago_screen_cleaner.jpg'

const products = [
  {
    id: 1,
    name: "Teclado Inalambrico Stylos",
    status: "Stock",
    specs: "Teclado en español inalambrico/alambrico para oficina, 2 baterias tipo AAA teclado, 1 bateria AA Mouse",
    price: 290,
    image: keyboardImage,
  },
  {
    id: 2,
    name: "HDD Disco Duro Segate 500GB",
    status: "Stock",
    specs: "HDD 500 GB de 3.5'', 5900 RPM, 5 / 12 v alimentacion, sin cable SATA incluido", 
    price: 450,
    image: hardDiskImage,
  },
  {
    id: 3,
    name: "Limpiador de pantallas Vorago",
    status: "Stock",
    specs: "Limpiador de pantallas con microfibra 30x30 cm. Antiestatico de 150 ml.",
    price: 150,
    image: screenCleanerImage,
  },
  {
    id: 4,
    name: "SSD ADATA SU630 2.5'' 240 GB",
    status: "Agotado",
    specs: "Lectura: 520 MB/s, Escritura 450 MB/s, Interfaz SATA, Memoria QLC 3D NAND",
    price: 599,
    image: solidStateImage,
  },

];

export function Shop() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePurchase = (e) => {
    e.preventDefault()

    const sum = cart.reduce((initial, product) => initial + product.price, 0)

    if (cart.length > 0) {
      window.open(
        `https://wa.me/+524772294425?text=Hola, quiero hacer un pedido: \n` +
        `${cart.map((product) => (
          " * " + product.name + " - $" + product.price + " MXN \n"
        ))}\n` +
        `Total: ${sum} MXN \n` +
        `Metodo de pago: ${paymentMethod}`

      )
    }

  }


  return (
    <div className="w-full bg-black p-8 text-white" style={{ fontFamily: 'Roboto' }}>
      <h1 className="text-3xl font-bold mb-8 text-center">Tienda</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {products.map((product, index) => (
          <div className="flex flex-col" key={index}>
            <ProductCard product={product} />
            {product.status == "Stock" &&

              <button
                onClick={() => addToCart(product)}
                className="cursor-pointer text-black bg-white px-4 py-2 my-3 rounded transition hover:text-white hover:bg-black"
              >
                Añadir al carrito
              </button>

            }


          </div>

        ))}
      </div>
      <div className="max-w-2xl mx-auto mt-12 bg-neutral-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Carrito vacío</p>
        ) : (
          <ul className="text-white">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between py-2 border-b">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold py-2">
              <span>Total</span>
              <span>
                $
                {cart
                  .reduce((sum, item) => sum + item.price, 0)
                  .toFixed(2)}
              </span>
            </li>

            <div className="PaymentsMethods flex flex-row justify-center items-center">
              <div className="flex flex-row py-5 items-center">
                <svg className="w-15 h-auto mx-2" xmlns="http://www.w3.org/2000/svg" width="2.11676in" height="1.5in" viewBox="0 0 152.407 108">
                  <g>
                    <rect width="152.407" height="108" style={{ fill: "none" }} />
                    <g>
                      <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" style={{ fill: "#ff5f00" }} />
                      <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" style={{ fill: "#eb001b" }} />
                      <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" style={{ fill: "#f79e1b" }} />
                      <path d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z" transform="translate(-319.79649 -252)" style={{ fill: "#f79e1b" }} />
                    </g>
                  </g>
                </svg>
                <img className="w-15 h-auto mx-2" src={Visa}></img>
                <img className="w-15 h-auto mx-2" src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg" width="100%" height="100%" alt="American Express Square Logo Registered Trademark" border="0" />
              </div>
            </div>


            <form method="" onSubmit={handlePurchase}>
              <div className="check flex flex-col h-full justify-center">
                <label className="pb-2">
                  <input
                    className="px-2"
                    onChange={e => setPaymentMethod(e.target.value)}
                    type="radio"
                    name="PaymentMethod"
                    value="Tarjeta" />
                  &nbsp;
                  Tarjeta de Credito o Debito
                </label>
                <label>
                  <input
                    className="px-2"
                    onChange={e => setPaymentMethod(e.target.value)}
                    type="radio"
                    name="PaymentMethod"
                    value="Efectivo"
                    defaultChecked={true}
                  />
                  &nbsp;
                  Efectivo
                </label>

                <button type="submit" onSubmit={handlePurchase}
                  className="mt-6 inline-block bg-green-500 cursor-pointer text-white px-6 py-3 rounded font-bold hover:bg-green-600 transition">
                  Enviar pedido por WhatsApp
                </button>
              </div>
            </form>
          </ul>
        )}
      </div>
    </div>
  );
}