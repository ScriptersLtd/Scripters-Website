"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import { useScroll } from "framer-motion";
import Script from "next/script";
import { useEffect } from "react";
import $ from "jquery"; // Import jQuery
import Test from "@/components/Test";
import Menu from "@/components/Menu";
import { Features } from "@/components/Features";
import Services from "@/components/Services";


export default function Home() {
  useEffect(() => {
    $(window).scroll(function() {
      var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
      var scroll = $window.scrollTop() + ($window.height() / 3);
     
      $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
          $body.addClass('color-' + $(this).data('color'));
        }
      });    
    }).scroll();
  }, []);
  return (
    <>
      <div className="relative">
        <Menu />
        <Navbar />
        <Hero />
        <Test />
        <Services />
        <Features />
      </div>
    </>
  );
}
