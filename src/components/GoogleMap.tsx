export default function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.8900213807156!2d37.88462620761668!3d40.98388899852162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406320368056c617%3A0x48af85bcb79d5188!2zxZ5hcmtpeWUsIEF0YXTDvHJrIEJsdi4gTm86MTkwIEQ6MywgNTIxMDAgQWx0xLFub3JkdS9PcmR1!5e0!3m2!1str!2str!4v1756414619314!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yer Yapı Sondaj & Jeofizik Ofis Konumu"
      ></iframe>
    </div>
  );
}
