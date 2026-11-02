import React, { useState, useEffect } from 'react';
import { Calculator, Send, MessageCircle, Upload, CheckCircle2, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { WholesaleQuoteRequest } from '../types';

interface WholesaleFormProps {
  preselectedServiceId?: string;
}

export const WholesaleForm: React.FC<WholesaleFormProps> = ({
  preselectedServiceId = 'serigrafia',
}) => {
  const [formData, setFormData] = useState<WholesaleQuoteRequest>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    serviceId: preselectedServiceId,
    productType: 'franela-algodon',
    quantity: 100,
    customizationTechniques: ['Serigrafía Plastisol'],
    needDesignAssistance: false,
    notes: '',
  });

  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [submittedQuote, setSubmittedQuote] = useState<{
    referenceId: string;
    totalEstimated: number;
    unitPrice: number;
    discountPercent: number;
    estimatedDays: number;
  } | null>(null);

  // Sync if preselectedServiceId prop changes
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  // Product pricing bases
  const productOptions = [
    { id: 'franela-algodon', label: 'Franela Algodón 20/1 Peinado', basePrice: 7.50 },
    { id: 'polo-pique', label: 'Polo Piqué Corporativo 220g', basePrice: 14.50 },
    { id: 'dryfit-sublimado', label: 'Camiseta Dry-Fit Sublimación 360°', basePrice: 12.00 },
    { id: 'chemise-bicolor', label: 'Chemise Bicolor Industrial', basePrice: 16.00 },
    { id: 'gorra-drill', label: 'Gorra Trucker / Drill 5 Paneles', basePrice: 6.80 },
    { id: 'hoodie-perchado', label: 'Hoodie Suéter Algodón Perchado', basePrice: 24.00 },
    { id: 'tote-ecologica', label: 'Tote Bag Lona Ecológica Cruda', basePrice: 4.50 },
  ];

  const currentProduct = productOptions.find((p) => p.id === formData.productType) || productOptions[0];

  // Dynamic wholesale volume discount calculator
  const calculateTier = (qty: number) => {
    if (qty >= 500) return { discount: 0.40, label: 'Escala Industrial (+500 unds)', days: 9 };
    if (qty >= 250) return { discount: 0.35, label: 'Escala Mayorista Oro (+250 unds)', days: 7 };
    if (qty >= 100) return { discount: 0.30, label: 'Escala Corporativa (+100 unds)', days: 6 };
    if (qty >= 50) return { discount: 0.25, label: 'Escala Mayorista Inicial (+50 unds)', days: 5 };
    return { discount: 0.05, label: 'Escala Reducida (<50 unds)', days: 4 };
  };

  const tier = calculateTier(formData.quantity);
  const estimatedUnitPrice = Number((currentProduct.basePrice * (1 - tier.discount)).toFixed(2));
  const estimatedTotal = Number((estimatedUnitPrice * formData.quantity).toFixed(2));
  const totalRegular = Number((currentProduct.basePrice * formData.quantity).toFixed(2));
  const totalSavings = Number((totalRegular - estimatedTotal).toFixed(2));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const toggleTechnique = (tech: string) => {
    setFormData((prev) => {
      const exists = prev.customizationTechniques.includes(tech);
      if (exists) {
        if (prev.customizationTechniques.length === 1) return prev; // keep at least one
        return {
          ...prev,
          customizationTechniques: prev.customizationTechniques.filter((t) => t !== tech),
        };
      } else {
        return {
          ...prev,
          customizationTechniques: [...prev.customizationTechniques, tech],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = `MB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedQuote({
      referenceId: reference,
      totalEstimated: estimatedTotal,
      unitPrice: estimatedUnitPrice,
      discountPercent: Math.round(tier.discount * 100),
      estimatedDays: tier.days,
    });
  };

  const sendViaWhatsApp = () => {
    const text = `*COTIZACIÓN CORPORATIVA GRUPO MARBELYST*
*Ref:* ${submittedQuote?.referenceId || 'NUEVA-COTIZACION'}
*Empresa:* ${formData.companyName || 'Particular'}
*Contacto:* ${formData.contactName}
*Teléfono:* ${formData.phone}
*Ciudad:* ${formData.city}
---
*Producto:* ${currentProduct.label}
*Cantidad:* ${formData.quantity} unidades
*Técnicas:* ${formData.customizationTechniques.join(', ')}
*Precio Unitario Estimado:* $${estimatedUnitPrice} c/u
*Total Estimado:* $${estimatedTotal} USD
*Ahorro Aplicado:* $${totalSavings} USD (${Math.round(tier.discount * 100)}% de descuento directo de fábrica)
${formData.notes ? `*Notas adicionales:* ${formData.notes}` : ''}
${uploadedFileName ? `*Archivo adjunto:* ${uploadedFileName}` : ''}
Por favor confirmar disponibilidad de telas y fecha de entrega.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/584120000000?text=${encoded}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D946EF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-yellow-400" />
            <span>Simulador & Cotizador en Tiempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading mb-4 text-white">
            Cotización Corporativa y al Mayor
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Calcula al instante el costo estimado por prenda con escala de volumen directa de fábrica y recibe atención personalizada inmediata por WhatsApp.
          </p>
        </div>

        {/* Main Grid: Form + Live Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Prenda y Cantidad */}
              <div>
                <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 text-xs font-black flex items-center justify-center">
                    1
                  </span>
                  Prenda y Volumen de Producción
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tipo de Prenda / Base:
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Cantidad de Prendas:
                      </label>
                      <span className="text-xs font-bold text-yellow-400">
                        {formData.quantity} piezas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="20"
                        max="1000"
                        step="10"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 20 })}
                        className="flex-1 accent-fuchsia-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                      />
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
                        className="w-20 bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1.5 text-sm font-bold text-center text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick quantity pill presets */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] text-slate-400">Escalas rápidas:</span>
                  {[50, 100, 250, 500].map((qty) => (
                    <button
                      type="button"
                      key={qty}
                      onClick={() => setFormData({ ...formData, quantity: qty })}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                        formData.quantity === qty
                          ? 'bg-fuchsia-600 text-white'
                          : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                      }`}
                    >
                      {qty} unds
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Técnica de Personalización */}
              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 text-xs font-black flex items-center justify-center">
                    2
                  </span>
                  Técnicas de Personalización Requeridas
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    'Serigrafía Plastisol',
                    'Sublimación Full Print',
                    'Bordado Computarizado',
                    'Etiqueta Tejida / Marca',
                  ].map((tech) => {
                    const isChecked = formData.customizationTechniques.includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => toggleTechnique(tech)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-blue-600/30 border-blue-500 text-white'
                            : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isChecked ? 'border-blue-400 bg-blue-500' : 'border-slate-600'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </span>
                        </div>
                        <span>{tech}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Datos de Contacto y Empresa */}
              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-slate-900 text-xs font-black flex items-center justify-center">
                    3
                  </span>
                  Datos del Contacto o Empresa
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nombre de la Empresa o Marca:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Inversiones Ávila C.A."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Persona de Contacto *:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre y Apellido"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp / Teléfono Móvil *:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+58 412..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      placeholder="contacto@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Ciudad / Estado de Entrega:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Caracas, Valencia, Maracaibo, Barquisimeto..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Logo / Boceto upload preview & notes */}
              <div className="pt-4 border-t border-slate-700 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Adjuntar Logotipo o Arte de Referencia (Opcional):
                  </label>
                  <label className="border-2 border-dashed border-slate-700 hover:border-slate-500 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-slate-900/50 transition-colors">
                    <Upload className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-xs text-slate-300 font-medium">
                      {uploadedFileName ? (
                        <span className="text-emerald-400 font-bold">✓ Archivo: {uploadedFileName}</span>
                      ) : (
                        'Haz clic para cargar PNG, PDF, AI o SVG de tu logo'
                      )}
                    </span>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf,.ai,.svg"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Notas adicionales o requerimientos de confección:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Distribución de tallas, colores de tela deseados, fecha límite de entrega..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-fuchsia-600 to-rose-600 hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Generar Hoja de Cotización</span>
                </button>

                <button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Simulator Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <h4 className="font-extrabold text-white text-base">
                    Resumen Estimado de Fábrica
                  </h4>
                </div>
                <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                  {tier.label}
                </span>
              </div>

              {/* Breakdown */}
              <div className="py-5 space-y-3.5 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Prenda Base:</span>
                  <span className="font-bold text-white text-right text-xs sm:text-sm">
                    {currentProduct.label}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Tiraje Seleccionado:</span>
                  <span className="font-bold text-white">
                    {formData.quantity} unidades
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Precio Catálogo Detal:</span>
                  <span className="text-slate-400 line-through">
                    ${currentProduct.basePrice.toFixed(2)} c/u
                  </span>
                </div>

                <div className="flex justify-between items-center text-emerald-400 font-bold">
                  <span>Descuento Directo Fábrica:</span>
                  <span>-{Math.round(tier.discount * 100)}% de Descuento</span>
                </div>

                <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-700">
                  <span>Costo Unitario al Mayor:</span>
                  <span className="text-2xl font-black text-yellow-400">
                    ${estimatedUnitPrice.toFixed(2)} <span className="text-xs font-normal text-slate-400">c/u</span>
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 mt-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-bold text-slate-300 uppercase">
                      Total Estimado del Lote:
                    </span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-rose-400">
                      ${estimatedTotal.toFixed(2)}
                    </span>
                  </div>

                  {totalSavings > 0 && (
                    <p className="text-[11px] text-emerald-400 font-semibold text-right">
                      ¡Tu empresa ahorra ${totalSavings.toFixed(2)} USD!
                    </p>
                  )}
                </div>

                <div className="text-xs text-slate-400 space-y-1.5 pt-2">
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tiempo estimado de producción: <strong>{tier.days} días hábiles</strong></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Muestra física de aprobación disponible previo al tiraje</span>
                  </p>
                </div>
              </div>

              {/* Ready button for WhatsApp */}
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl font-black text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar este Lote a un Asesor</span>
              </button>
            </div>

            {/* Generated Quote Ticket if submitted */}
            {submittedQuote && (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-3xl p-6 text-white animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>¡Proforma Generada con Éxito!</span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Número de Referencia: <strong className="text-white">{submittedQuote.referenceId}</strong>
                </p>
                <div className="text-xs text-slate-300 space-y-1 bg-black/30 p-3 rounded-xl mb-4 font-mono">
                  <p>Total: ${submittedQuote.totalEstimated.toFixed(2)} USD</p>
                  <p>Unitario: ${submittedQuote.unitPrice.toFixed(2)} USD</p>
                  <p>Descuento: {submittedQuote.discountPercent}%</p>
                  <p>Entrega estimada: {submittedQuote.estimatedDays} días hábiles</p>
                </div>
                <button
                  onClick={sendViaWhatsApp}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enviar Referencia a WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
