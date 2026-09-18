"use client";

import { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
  const contactEndpoint = isLocalhost
    ? '/api/contact'
    : process.env.NEXT_PUBLIC_CONTACT_API_URL || '/api/contact';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'General support').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Name, email, and message are required.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(result?.message || 'We could not send your message right now. Please email hello@unepal.com directly.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('We could not send your message right now. Please email hello@unepal.com directly.');
    }
  };

  const openContactForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLInputElement>('input')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setIsOpen(false); return; }
      if (event.key !== 'Tab' || !dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>('button:not([disabled]), input, select, textarea, a[href]'));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <section id="contact" className="scroll-mt-28 bg-[#F3F4F6] py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="overflow-hidden rounded-[1.5rem] border border-[#E4E6EB] bg-white shadow-[0_24px_70px_-58px_rgba(7,22,50,0.45)]">
          <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#FFF2F4] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
                Contact
              </span>
              <h2 className="mt-4 max-w-3xl text-[1.85rem] font-extrabold leading-[1.1] text-[#071632] sm:text-[3rem]">
                Need help with uNepal?
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#65676B] sm:text-lg sm:leading-8">
                Send a message to the uNepal team and we will respond as soon as possible.
              </p>
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={openContactForm}
              className="inline-flex w-full items-center justify-center gap-3 rounded-[1rem] bg-brand-primary px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_36px_-24px_rgba(230,0,35,0.9)] transition-colors hover:bg-brand-blue sm:w-auto"
            >
              Contact us
              <i className="fa-solid fa-arrow-right text-sm" />
            </button>
          </div>
        </FadeIn>
      </div>

      {isOpen && (
        <div ref={dialogRef} className="fixed inset-0 z-[80] flex items-end justify-center bg-[#071632]/55 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div className="w-full max-w-2xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_28px_90px_-32px_rgba(7,22,50,0.7)]">
            <div className="flex items-start justify-between gap-4 border-b border-[#E4E6EB] px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-primary">Contact</p>
                <h3 id="contact-modal-title" className="mt-1 text-2xl font-extrabold leading-tight text-[#071632]">Send us a message</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4E6EB] bg-white text-[#071632] shadow-sm transition hover:bg-[#F8FAFC]"
                aria-label="Close contact form"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <form id="contact-form" className="max-h-[78vh] overflow-y-auto bg-[#F8FAFC] p-5 sm:p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-[#1C1E21]">Name <span className="text-brand-primary">*</span></label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required className="w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493] focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-[#1C1E21]">Email <span className="text-brand-primary">*</span></label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493] focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="you@example.com" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-[#1C1E21]">Subject</label>
                <select id="contact-subject" name="subject" className="w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20">
                  <option>General support</option>
                  <option>Privacy request</option>
                  <option>Child safety report</option>
                  <option>Moderation appeal</option>
                  <option>Business enquiry</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-[#1C1E21]">Message <span className="text-brand-primary">*</span></label>
                <textarea id="contact-message" name="message" rows={5} required className="w-full resize-y rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493] focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Include links, usernames, and context that will help us respond faster." />
              </div>

              {status === 'success' && (
                <div role="status" className="mt-4 rounded-xl border border-brand-blue/15 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-blue">
                  Your message has been sent to hello@unepal.com.
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="mt-4 rounded-xl border border-brand-primary/15 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-primary">
                  {errorMessage}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="mt-5 w-full rounded-[1rem] bg-brand-primary py-4 text-base font-extrabold text-white shadow-[0_18px_36px_-24px_rgba(230,0,35,0.9)] transition-colors hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-[#E4E6EB] disabled:text-[#65676B]">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
