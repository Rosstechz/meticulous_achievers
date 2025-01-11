const Map = () => {
  return (
    <div className="flex items-start md:mt-52 md:items-center justify-center">
      <div className="w-full h-[500px] px-5 max-w-[1200px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d696.4457039070055!2d75.3223843904031!3d19.882391548886474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1736595360539!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-none rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
