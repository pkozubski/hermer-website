"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { ReelCtaButton } from "./ui/ReelCtaButton";

export const Footer: React.FC = () => {
  return (
    <footer className="text-neutral-400 pt-24 pb-32 relative">
      {/* Decorative Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Background Typography */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.005]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80%"
          height="auto"
          viewBox="0 0 232 40"
          fill="none"
          className="mx-auto"
        >
          <g clip-path="url(#clip0_1301_156)">
            <path
              d="M26.8897 14.5579C2.11033 7.68716 0.13615 0.884442 0 0.0681152C0.204225 1.36063 2.723 16.5987 18.4484 19.5919V30.6804C18.4484 32.6531 18.3122 34.1497 18.108 35.1021C17.9038 36.0545 17.4953 36.8708 16.8826 37.4831C16.338 38.0273 15.7254 38.4355 15.0446 38.7076C14.3639 38.9797 13.4108 39.1157 12.3216 39.1838V39.864H30.9742V39.1838C29.8169 39.1157 28.9319 38.9797 28.2512 38.7076C27.5704 38.4355 26.9577 38.0273 26.4131 37.4831C25.8005 36.8708 25.392 36.0545 25.1878 35.1021C24.9836 34.1497 24.8474 32.6531 24.8474 30.6804V20.8164C39.6878 24.1497 51.6009 31.3606 58.0681 39.864C58.0681 39.796 53.3028 21.9049 26.8897 14.5579Z"
              fill="#fff"
            />
            <path
              d="M87.3404 33.6736C87 34.5579 86.5235 35.3743 85.9108 36.0545C85.0939 37.0749 84.0047 37.8232 82.7113 38.2994C81.4178 38.7756 79.784 39.0477 77.8779 39.0477C75.9718 39.0477 74.5422 38.7756 73.453 38.2314C72.3638 37.6872 71.4789 36.8708 70.9343 35.7144C70.5939 35.0341 70.3897 34.2178 70.2535 33.1974C70.1174 32.177 70.0493 30.6123 70.0493 28.3674V22.8572H71.4108C72.6361 22.8572 73.5892 22.9933 74.338 23.1974C75.0868 23.4695 75.7676 23.8096 76.2441 24.3538C76.7206 24.8981 77.1291 25.5103 77.4014 26.2586C77.6737 27.0069 77.8779 28.0273 78.0141 29.2518H78.5587L78.6267 16.3266H78.0821C77.946 17.5511 77.7418 18.5035 77.5375 19.1157C77.3333 19.728 76.9929 20.2722 76.5164 20.7484C76.0399 21.2246 75.4272 21.5647 74.6784 21.7688C73.9296 21.9729 72.8404 22.0409 71.3427 22.0409H70.1174V7.61915H75.6314C77.3333 7.61915 78.6948 7.7552 79.716 7.95928C80.7371 8.16337 81.6221 8.57153 82.3709 9.18377C83.2559 9.86405 84.0047 10.6123 84.4812 11.4967C84.9577 12.3811 85.2981 13.4695 85.5023 14.83H86.0469L85.6385 6.87085H59.7019V7.41507C60.6549 7.48309 61.4037 7.61915 61.9483 7.82323C62.4929 8.02731 63.0375 8.36745 63.446 8.84364C63.9225 9.38786 64.2629 10.0001 64.4671 10.8164C64.6713 11.6328 64.7394 12.8572 64.7394 14.4899V32.313C64.7394 33.9457 64.6713 35.1702 64.4671 35.9865C64.2629 36.8028 63.9225 37.4151 63.446 37.9593C62.9695 38.4355 62.4929 38.7756 61.8803 38.9797C61.3357 39.1838 60.5868 39.3198 59.6338 39.3879V39.9321H88.4296L88.7699 30.3402H88.2253C88.0211 31.6328 87.6807 32.7892 87.3404 33.6736Z"
              fill="#fff"
            />
            <path
              d="M118.995 37.8231C118.519 37.2108 117.906 36.1904 117.157 34.8979C116.408 33.5374 115.319 31.3605 113.89 28.4353C113.277 27.1428 112.8 26.2584 112.528 25.7142C112.188 25.238 111.916 24.7619 111.507 24.4217C111.031 24.0136 110.35 23.5374 109.329 23.1972C110.486 22.9251 111.439 22.653 112.12 22.3809C112.8 22.1088 113.481 21.7006 114.026 21.2925C115.932 19.7959 116.885 17.755 116.885 15.238C116.885 13.5374 116.477 12.0408 115.592 10.8163C114.707 9.52375 113.481 8.57137 111.847 7.95913C110.418 7.41491 108.444 7.07478 105.993 6.93872H90.5399V7.48294C91.4249 7.55097 92.1737 7.68702 92.7864 7.8911C93.331 8.09518 93.8756 8.43532 94.284 8.91151C94.8286 9.45573 95.169 10.068 95.3052 10.8843C95.5094 11.7006 95.5775 12.9251 95.5775 14.5578V32.3809C95.5775 34.0135 95.5094 35.238 95.3052 36.0544C95.101 36.8707 94.7606 37.4829 94.284 38.0272C93.8756 38.5033 93.331 38.8435 92.7864 39.0476C92.2418 39.2516 91.493 39.3877 90.5399 39.4557V39.9999H105.993V39.4557C105.04 39.3877 104.291 39.2516 103.746 39.0476C103.202 38.8435 102.657 38.5033 102.249 38.0272C101.772 37.4829 101.432 36.8707 101.228 36.0544C101.023 35.238 100.955 34.0135 100.955 32.3809V23.6734H102.113C102.862 23.6734 103.474 23.7414 103.951 23.8775C104.427 24.0135 104.904 24.2176 105.38 24.5578C106.265 25.17 107.15 26.3945 108.239 28.1632C109.261 29.9319 110.282 31.9727 111.303 34.2857L113.005 38.0952C113.141 38.3673 113.345 38.9115 113.754 39.7959H121.786V39.2516C121.106 39.1836 120.629 39.0476 120.221 38.8435C119.812 38.7074 119.404 38.3673 118.995 37.8231ZM106.129 22.7891C105.244 22.9931 103.815 23.1292 101.84 23.1292H100.955V7.61899H101.977C103.678 7.61899 105.04 7.75505 105.993 7.95913C106.946 8.16321 107.763 8.57137 108.376 9.11559C109.261 9.86389 109.941 10.7482 110.418 11.9047C110.894 12.9931 111.167 14.2176 111.167 15.5101C111.167 17.8911 110.35 19.8639 108.648 21.4965C107.831 22.1088 107.014 22.585 106.129 22.7891Z"
              fill="#fff"
            />
            <path
              d="M145.136 32.653L134.653 6.87067H124.169V7.41489C125.326 7.48292 126.279 7.687 126.96 8.02714C127.641 8.36727 128.185 8.97952 128.594 9.72782C128.866 10.272 129.07 11.1564 129.139 12.3129C129.207 12.9931 129.207 13.6734 129.207 14.4217V32.2448C129.207 33.8775 129.139 35.102 128.934 35.9183C128.73 36.7346 128.39 37.3469 127.913 37.8911C127.437 38.3673 126.96 38.7074 126.347 38.9115C125.735 39.1156 125.054 39.2516 124.101 39.3197V39.8639H135.265V39.3197C134.312 39.2516 133.631 39.1156 133.019 38.9115C132.474 38.7074 131.93 38.3673 131.521 37.8911C131.045 37.3469 130.704 36.7346 130.5 35.9183C130.296 35.102 130.228 33.8775 130.228 32.2448V11.0884L142.617 39.7958H143.162L155.62 10.6122V32.1768C155.62 33.8095 155.552 35.0339 155.347 35.8503C155.143 36.6666 154.803 37.2788 154.326 37.8231C153.85 38.2992 153.373 38.6394 152.761 38.8435C152.216 39.0475 151.467 39.1836 150.514 39.2516V39.7958H165.967V39.2516C164.333 39.1836 163.108 38.7074 162.223 37.8231C161.746 37.3469 161.406 36.6666 161.202 35.9183C160.998 35.102 160.93 33.8775 160.93 32.2448V14.4217C160.93 13.2652 160.998 12.3128 161.066 11.4285C161.134 10.8163 161.27 10.272 161.406 9.86387C161.61 9.45571 161.883 9.04754 162.223 8.70741C162.7 8.23122 163.176 7.89108 163.789 7.687C164.333 7.48292 165.082 7.34686 165.967 7.27884V6.73462H156.028L145.136 32.653Z"
              fill="#fff"
            />
            <path
              d="M195.92 33.6736C195.58 34.5579 195.103 35.3743 194.491 36.0545C193.674 37.0749 192.585 37.8232 191.291 38.2994C189.998 38.7756 188.364 39.0477 186.458 39.0477C184.552 39.0477 183.122 38.7756 182.033 38.2314C180.944 37.6872 180.059 36.8708 179.514 35.7144C179.174 35.0341 178.969 34.2178 178.833 33.1974C178.697 32.177 178.697 30.6123 178.697 28.3674V22.8572H180.059C181.284 22.8572 182.237 22.9933 182.986 23.1974C183.735 23.4695 184.415 23.8096 184.892 24.3538C185.369 24.8981 185.777 25.5103 186.049 26.2586C186.322 27.0069 186.526 28.0273 186.662 29.2518H187.207L187.275 16.3266H186.73C186.594 17.5511 186.39 18.5035 186.185 19.1157C185.981 19.728 185.641 20.2722 185.164 20.7484C184.688 21.2246 184.075 21.5647 183.326 21.7688C182.577 21.9729 181.488 22.0409 179.991 22.0409H178.561V7.61915H184.075C185.777 7.61915 187.138 7.7552 188.16 7.95928C189.181 8.16337 190.066 8.57153 190.815 9.18377C191.7 9.86405 192.448 10.6123 192.925 11.4967C193.401 12.3811 193.742 13.4695 193.946 14.83H194.491L194.082 6.87085H168.077V7.41507C169.031 7.48309 169.779 7.61915 170.324 7.82323C170.869 8.02731 171.413 8.36745 171.822 8.84364C172.298 9.38786 172.638 10.0001 172.843 10.8164C173.047 11.6328 173.115 12.8572 173.115 14.4899V32.313C173.115 33.9457 173.047 35.1702 172.843 35.9865C172.638 36.8028 172.298 37.4151 171.822 37.9593C171.345 38.4355 170.869 38.7756 170.324 38.9797C169.779 39.1838 169.031 39.3198 168.077 39.3879V39.9321H196.873L197.214 30.3402H196.669C196.601 31.6328 196.261 32.7892 195.92 33.6736Z"
              fill="#fff"
            />
            <path
              d="M230.366 38.8435C229.958 38.6394 229.617 38.2993 229.209 37.8231C228.732 37.2108 228.12 36.1904 227.371 34.8979C226.622 33.5374 225.533 31.3605 224.103 28.4353C223.491 27.1428 223.014 26.2584 222.742 25.7142C222.401 25.238 222.061 24.7619 221.721 24.4217C221.244 24.0136 220.563 23.5374 219.542 23.1972C220.7 22.9251 221.653 22.653 222.333 22.3809C223.014 22.1088 223.695 21.7006 224.239 21.2925C226.146 19.7959 227.099 17.755 227.099 15.238C227.099 13.5374 226.69 12.0408 225.805 10.8163C224.92 9.52375 223.695 8.57137 222.061 7.95913C220.631 7.41491 218.657 7.07478 216.207 6.93872H200.754V7.48294C201.639 7.55097 202.387 7.68702 203 7.8911C203.613 8.09518 204.089 8.43532 204.498 8.91151C205.042 9.45573 205.383 10.068 205.519 10.8843C205.723 11.7006 205.791 12.9251 205.791 14.5578V32.3809C205.791 34.0135 205.723 35.238 205.519 36.0544C205.315 36.8707 204.974 37.4829 204.498 38.0272C204.089 38.5033 203.545 38.8435 203 39.0476C202.455 39.2516 201.707 39.3877 200.754 39.4557V39.9999H216.207V39.4557C215.254 39.3877 214.505 39.2516 213.96 39.0476C213.416 38.8435 212.871 38.5033 212.462 38.0272C211.986 37.4829 211.646 36.8707 211.441 36.0544C211.237 35.238 211.169 34.0135 211.169 32.3809V23.6734H212.326C213.075 23.6734 213.688 23.7414 214.164 23.8775C214.641 24.0135 215.117 24.2176 215.594 24.5578C216.479 25.17 217.364 26.3945 218.453 28.1632C219.474 29.9319 220.495 31.9727 221.516 34.2857L223.218 38.0952C223.354 38.3673 223.559 38.9115 223.967 39.7959H232V39.2516C231.251 39.1836 230.775 39.0476 230.366 38.8435ZM216.343 22.7891C215.458 22.9931 214.028 23.1292 212.054 23.1292H211.101V7.61899H212.122C213.824 7.61899 215.185 7.75505 216.139 7.95913C217.092 8.16321 217.908 8.57137 218.521 9.11559C219.406 9.86389 220.087 10.7482 220.563 11.9047C221.04 12.9931 221.312 14.2176 221.312 15.5101C221.312 17.8911 220.495 19.8639 218.793 21.4965C217.977 22.1088 217.16 22.585 216.343 22.7891Z"
              fill="#fff"
            />
            <path
              d="M39.4155 0.680272C40.5728 0.748299 41.4578 0.884354 42.1385 1.15646C42.8193 1.42857 43.432 1.83673 43.9766 2.38095C44.5892 2.9932 44.9977 3.80952 45.2019 4.7619C45.4061 5.71429 45.5423 7.21088 45.5423 9.18367V21.0884C48.1291 23.0612 50.2395 25.102 51.8733 27.0068V9.18367C51.8733 7.21088 52.0094 5.71429 52.2136 4.7619C52.4179 3.80952 52.8263 2.9932 53.439 2.38095C53.9836 1.83673 54.5963 1.42857 55.277 1.15646C55.9578 0.884354 56.8428 0.748299 58 0.680272V0H39.4155V0.680272Z"
              fill="#fff"
            />
            <path
              d="M16.8826 2.38095C17.4953 2.9932 17.9038 3.80952 18.108 4.7619C18.3122 5.71429 18.4484 7.21088 18.4484 9.18367V9.52381C20.3545 10.2041 22.4648 10.8844 24.8474 11.5646V9.18367C24.8474 7.21088 24.9836 5.71429 25.1878 4.7619C25.392 3.80952 25.8005 2.9932 26.4131 2.38095C26.9577 1.83673 27.5704 1.42857 28.2512 1.15646C28.9319 0.884354 29.8169 0.748299 30.9742 0.680272V0H12.3216V0.680272C13.4108 0.748299 14.3638 0.884354 15.0446 1.15646C15.7254 1.36054 16.338 1.76871 16.8826 2.38095Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0_1301_156">
              <rect width="232" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Giant CTA */}
        <div className="mb-24 border-b border-white/5 pb-24 group/cta">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-none break-normal">
                <div className="overflow-hidden pb-4 md:pb-8">Masz pomysł</div>
                <div className="overflow-hidden pb-4 md:pb-8">
                  na nowy projekt?
                </div>
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <ReelCtaButton
                  text="Rozpocznij wycenę"
                  href="/kontakt"
                  baseColor="#ffffff"
                  textColor="#000000"
                  hoverColor="#916AFF"
                  hoverTextColor="#ffffff"
                  size="large"
                />
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end text-right">
              <p className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-4">
                Skontaktuj się z nami, a pomożemy Ci przekształcić Twoją wizję w
                rzeczywistość. Odpowiadamy w ciągu 24 godzin.
              </p>
              <ArrowRight className="text-neutral-700 w-12 h-12 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Middle Section: Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8 pr-12">
            <a
              href="/"
              className="block text-white text-3xl font-bold tracking-tighter"
            >
              Hermer<span className="text-[#916AFF]">.</span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Tworzymy innowacyjne rozwiązania cyfrowe, które pomagają firmom
              rosnąć. Łączymy design, technologię i strategię w jedną spójną
              całość.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4">
              {[
                { label: "Strona główna", href: "/" },
                { label: "Realizacje", href: "/realizacje" },
                { label: "Opinie", href: "/opinie" },
                { label: "O firmie", href: "/o-firmie" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Oferta</h4>
            <ul className="space-y-4">
              {[
                { label: "Strony www", href: "/oferta/strony-www" },
                { label: "Sklepy online", href: "/oferta/sklepy-internetowe" },
                { label: "Marketing", href: "/oferta/marketing" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group w-fit"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
            <ul className="space-y-8">
              <li className="group">
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Napisz do nas
                </p>
                <a
                  href="mailto:bok@e-hermer.pl"
                  className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#916AFF] transition-colors flex items-center gap-2"
                >
                  bok@e-hermer.pl
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#916AFF]"
                  />
                </a>
              </li>
              <li className="group">
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Zadzwoń
                </p>
                <a
                  href="tel:+48531008661"
                  className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#916AFF] transition-colors flex items-center gap-2"
                >
                  +48 531 008 661
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#916AFF]"
                  />
                </a>
              </li>
              <li>
                <p className="text-xs text-neutral-600 uppercase tracking-wider font-bold mb-2">
                  Lokalizacja
                </p>
                <p className="text-neutral-400 text-sm">
                  Bydgoska 50, Wałcz
                  <br />
                  Polska
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-neutral-600">
              © 2010 – {new Date().getFullYear()} Hermer. Wszelkie prawa
              zastrzeżone.
            </p>
            <p className="text-neutral-500 text-[10px]">
              Design & Development by Hermer Team.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </a>
            <a
              href="#"
              className="text-xs font-bold text-neutral-500 hover:text-white transition-colors"
            >
              Regulamin (RODO)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
