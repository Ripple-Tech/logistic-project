interface Props {
  imgURL: string;
  label: string;
  subtext: string;
}
const ServiceCard = ({ imgURL, label, subtext }: Props) => {
    return (
      <div className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16'>
        <div className='w-[55px] h-[55px] flex justify-center items-center bg-[#ff7011] rounded-full'>
          <img src={imgURL} alt={label} width={50} height={50} />
        </div>
        <h3 className='section-title'>
          {label}
        </h3>
        <p className='section-description'>
          {subtext}
        </p>
      </div>
    );
  };
  
  export default ServiceCard;
  