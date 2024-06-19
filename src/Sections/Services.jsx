import ServiceCard from "../Components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="flex max-container justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label}
          {...service} />
      ))}
    </div>
  )
}

export default Services