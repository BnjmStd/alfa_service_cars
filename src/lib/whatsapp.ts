export function initWhatsAppButton(selector: string, customMessage?: string) {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      
      const phone = (button as HTMLElement).dataset.phone || "56930636488";
      const message = customMessage || `¡Hola! 👋\n\nQuiero agendar un servicio.`;

      const encodedMsg = encodeURIComponent(message);
      const cleanPhone = phone.replace(/\D/g, "");
      window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, "_blank");
    });
  });
}
