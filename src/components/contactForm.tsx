export default function ContactForm() {
  return (
    <div data-aos="flip-left">
      <div className="mb-10">
        <h1 className="mb-2 font-inter text-4xl font-extrabold">
          Kontaktní Formulář
        </h1>
        <div className="text-gray-500">
          Máte zájem o mé služby? Neváhejte mě kontaktovat!
        </div>
      </div>

      {/* Form */}
      <form className="mb-12">
        <div className="-my-6 divide-y divide-gray-200">
          {/* Group #1 */}
          <div className="py-6">
            <div className="mb-5 text-lg font-bold text-gray-800">
              <span className="text-blue-500">1.</span> Uveďte Své Kontaktní
              Údaje
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="name"
                >
                  Jméno <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="Jméno"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="surname"
                >
                  Příjmení <span className="text-red-500">*</span>
                </label>
                <input
                  id="surname"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="Příjmení"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  className="form-input w-full"
                  type="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="phone"
                >
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  className="form-input w-full"
                  type="text"
                  required
                  placeholder="Telefon"
                />
              </div>
            </div>
          </div>

          {/* Group #2 */}
          <div className="py-6">
            <div className="mb-5 text-lg font-bold text-gray-800">
              <span className="text-blue-500">2.</span> Zanechte Svou Zprávu
            </div>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-800"
                  htmlFor="description"
                >
                  Zpráva <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="description"
                  className="form-textarea w-full py-2 text-sm"
                  rows={4}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
