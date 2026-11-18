// src/components/sections/DigitalAngPao.jsx
import React, { useState } from 'react';
import { FanCrest, OrnateDivider, CornerFlourish } from '../common/DecorativeSVG';
import { Copy, Check, Download, CreditCard } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';
import { I18N } from '../../data/i18n';

/**
 * WEDDING GIFT SECTION (ចំណងដៃអាពាហ៍ពិពាហ៍ - ពណ៌ផ្កាឈូកស្ដើង & ក្បាច់ខ្មែរ)
 * QR codes are ALWAYS visible (per specification - no toggle).
 * Direct Copy Account Number and Save QR Image buttons.
 */
export default function DigitalAngPao({ currentLang = 'km' }) {
  const t = I18N[currentLang];
  const { gifts } = WEDDING_DATA;
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (accNum, idx) => {
    navigator.clipboard.writeText(accNum.replace(/\s+/g, ''));
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  const handleDownloadQr = (qrUrl, bankName) => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `Wedding-QR-${bankName}.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="gift" className="relative py-24 px-4 md:px-8 bg-[#fff5f8] text-[#4a2430] overflow-hidden">
      {/* Background Subtle Rose Paper Texture */}
      <div className="absolute inset-0 texture-envelope-pink opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center w-full">
        {/* Khmer Temple Crest & Heading */}
        <FanCrest className="w-16 h-10 mb-2 mx-auto" />
        <h2 className="font-moul text-2xl md:text-3xl gold-foil-text text-center w-full">
          {t.giftTitle}
        </h2>
        <p className="font-kantumruy text-xs md:text-sm text-[#7a3246] mt-1 max-w-lg font-semibold text-center mx-auto">
          {t.giftSubtitle}
        </p>
        <OrnateDivider className="w-48 h-4 my-2 opacity-90 mx-auto" />

        {/* Gift QR Cards Container (Flex Centered for 1 or more items) */}
        <div className={`mt-5 w-full max-w-2xl mx-auto ${gifts.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center'}`}>
          {gifts.map((gift, index) => (
            <div
              key={index}
              className="pink-anime-card rounded-2xl p-6 flex flex-col items-center justify-center relative group hover:border-[#d4af37] transition-all shadow-[0_12px_35px_rgba(235,160,180,0.22)] w-full max-w-sm mx-auto"
            >
              <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 opacity-80" />
              <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 opacity-80" />

              {/* Bank Name */}
              <div className="flex items-center justify-center gap-2 mb-6 w-full text-center">
                <CreditCard className="w-4 h-4 text-[#c59728] shrink-0" />
                <h3 className="font-moul text-base gold-foil-subtle text-center">
                  {gift.bankName}
                </h3>
              </div>

              {/* Always Visible QR Code */}
              <div className="relative w-48 h-48 bg-white p-3 rounded-2xl border-2 border-[#d4af37]/70 shadow-md flex items-center justify-center my-2 group-hover:scale-102 transition-transform mx-auto">
                <img
                  src={gift.qrCodeImage}
                  alt={`${gift.bankName} QR Code`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Account Details */}
              <div className="text-center mt-3 space-y-1 w-full flex flex-col items-center justify-center">
                <p className="font-kantumruy font-bold text-sm tracking-wide text-[#5c2838] text-center">
                  {gift.accountName}
                </p>
                <p className="font-mono text-sm tracking-wider text-[#7a3246] font-semibold text-center">
                  {gift.accountNumber}
                </p>
                <span className="inline-block text-[10px] font-bold text-[#8f5f14] bg-[#fdebed] border border-[#e8aebb] px-2.5 py-0.5 rounded-full mt-1">
                  {gift.currency}
                </span>
              </div>

              {/* Actions: Copy & Save QR */}
              <div className="flex items-center justify-center gap-2 mt-5 w-full">
                <button
                  type="button"
                  onClick={() => handleCopy(gift.accountNumber, index)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white border border-[#d4af37]/60 text-xs font-kantumruy font-bold text-[#7a3246] hover:border-[#d4af37] active:scale-95 transition-all shadow-sm"
                >
                  {copiedIdx === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#c59728]" />
                      <span>{t.copyNumber}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadQr(gift.qrCodeImage, gift.bankName)}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-white border border-[#d4af37]/60 text-[#7a3246] hover:border-[#d4af37] active:scale-95 transition-all shadow-sm"
                  title={t.saveQr}
                >
                  <Download className="w-4 h-4 text-[#c59728]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}