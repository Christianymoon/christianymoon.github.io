import * as Separator from "@radix-ui/react-separator"
import { Monitor, HardDrive, Cpu, Fan, Shield, Zap, Users, Play, Clock, CheckCircle } from "lucide-react"

export function ComputerMaintenanceServices() {

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Limpieza Completa de PC",
      description: "Limpieza interna y externa, eliminación de polvo y suciedad",
      price: "$350",
      duration: "1-2 horas",
      includes: ["Limpieza de componentes", "Cambio de pasta térmica", "Verificación de cables"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Actualización de Software",
      description: "Actualización de sistema operativo y programas esenciales",
      price: "$300",
      duration: "2-4 horas",
      includes: ["Actualización de OS", "Drivers actualizados", "Software de seguridad"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mantenimiento Preventivo Completo",
      description: "Servicio integral que incluye todos los servicios anteriores",
      price: "$550",
      duration: "4-6 horas",
      includes: ["Todos los servicios", "Garantía 3 meses", "Reporte detallado"],
    },
  ]

  const volumePromotions = [
    {
      quantity: "5-10 equipos",
      discount: "10%",
      description: "Ideal para oficinas pequeñas",
      icon: <Users className="w-6 h-6" />,
    },
    {
      quantity: "11-25 equipos",
      discount: "15%",
      description: "Perfecto para empresas medianas",
      icon: <Users className="w-6 h-6" />,
    },
    {
      quantity: "26+ equipos",
      discount: "20%",
      description: "Corporativos y grandes empresas",
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const procedureVideos = [
    {
      title: "Limpieza Interna de PC",
      duration: "8:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Aprende el proceso completo de limpieza interna",
    },
    {
      title: "Cambio de Pasta Térmica",
      duration: "6:30",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Técnica correcta para aplicar pasta térmica",
    },
    {
      title: "Diagnóstico de Hardware",
      duration: "12:15",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Herramientas y métodos de diagnóstico",
    },
    {
      title: "Optimización de Windows",
      duration: "10:20",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Configuraciones para mejor rendimiento",
    },
  ]

  const handleServiceRequested = (service) => {
    window.open(
      'https://wa.me/+524772294425?text=Hola!, me interesa contratar un servicio de: \n' + service.title
    )
  }



  return (
    <div className="min-h-screen bg-black from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mantenimiento Preventivo de Computadoras
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Servicios profesionales de mantenimiento preventivo para mantener tus equipos funcionando al máximo
            rendimiento. Evita fallas costosas con nuestro servicio especializado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg text-white">{service.icon}</div>
                  <div>
                    <h3 className="text-white text-lg font-semibold">{service.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                  <span className="text-sm text-gray-400">MXN</span>
                </div>

                <Separator.Root className="bg-gray-600 h-px" />

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Incluye:</h4>
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* ― Service card CTA ― */}
                <button onClick={() => handleServiceRequested(service)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-200">
                  Solicitar Servicio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Volume Promotions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Promociones por Volumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volumePromotions.map((promo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-800/30 to-blue-800/30 border border-green-500/30 rounded-lg p-6 text-center"
              >
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-green-600 rounded-full">{promo.icon}</div>
                  </div>
                  <h3 className="text-white text-xl font-semibold">{promo.quantity}</h3>
                  <p className="text-gray-300 mt-2">{promo.description}</p>
                </div>

                <div className="text-center">
                  <span className="inline-block text-2xl font-bold bg-green-600 text-white px-4 py-2 rounded-full mb-4">
                    {promo.discount} OFF
                  </span>
                  <p className="text-gray-300 text-sm">Descuento aplicable a todos los servicios</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* {/* Video Procedures Section */}
        <div className="hidden">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Videos de Procedimientos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedureVideos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* ― Video overlay play button ― */}
                    <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors duration-200">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 border border-blue-500/30 rounded-lg max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas un servicio personalizado?</h3>
            <p className="text-gray-300 mb-6">
              Contáctanos para obtener una cotización personalizada según tus necesidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* ― Contact-CTA buttons ― */}
              <button onClick={() => {handleServiceRequested({title: "Una cotizacion personalizada"})}} 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
