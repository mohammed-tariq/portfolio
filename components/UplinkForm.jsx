'use client';

import { useState } from 'react';

const FIELD_CLASS =
  'w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-code-sm text-code-sm text-on-surface focus:ring-0 focus:outline-none focus:border-primary-fixed-dim transition-all placeholder:text-on-surface-variant/20';

const UNDERLINE =
  'absolute bottom-0 left-0 h-[1px] w-0 bg-primary-fixed-dim group-focus-within:w-full transition-all duration-500';

export default function UplinkForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    const form = e.target;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        form.reset();
      }, 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  const buttonLabel =
    status === 'sending'
      ? 'INITIALIZING_TRANSMISSION...'
      : status === 'sent'
        ? 'PACKET_DELIVERED_SUCCESSFULLY'
        : status === 'error'
          ? 'TRANSMISSION_FAILED :: RETRY'
          : 'TRANSMIT_DATA';

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label
            htmlFor="uplink-name"
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-widest uppercase"
          >
            ENTITY_ID
          </label>
          <input
            id="uplink-name"
            className={FIELD_CLASS}
            placeholder="YOUR_NAME"
            required
            type="text"
            name="name"
          />
          <div className={UNDERLINE} />
        </div>
        <div className="group relative">
          <label
            htmlFor="uplink-email"
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-widest uppercase"
          >
            RETURN_ADDRESS
          </label>
          <input
            id="uplink-email"
            className={FIELD_CLASS}
            placeholder="your@email.com"
            required
            type="email"
            name="email"
          />
          <div className={UNDERLINE} />
        </div>
        <div className="group relative md:col-span-2">
          <label
            htmlFor="uplink-location"
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-widest uppercase"
          >
            UPLINK_LOCATION
          </label>
          <input
            id="uplink-location"
            className={FIELD_CLASS}
            defaultValue="Dubai, UAE | +971 54 382 6465"
            readOnly
            type="text"
            name="location"
          />
          <div className={UNDERLINE} />
        </div>
      </div>

      <div className="group relative">
        <label
          htmlFor="uplink-subject"
          className="block font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-widest uppercase"
        >
          UPLINK_SUBJECT
        </label>
        <select id="uplink-subject" className={`${FIELD_CLASS} appearance-none`} name="subject">
          <option className="bg-surface-container">GENERAL_INQUIRY</option>
          <option className="bg-surface-container">SYSTEM_COLLABORATION</option>
          <option className="bg-surface-container">RECON_MISSION</option>
          <option className="bg-surface-container">BUG_REPORT</option>
        </select>
        <div className={UNDERLINE} />
      </div>

      <div className="group relative">
        <label
          htmlFor="uplink-message"
          className="block font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-widest uppercase"
        >
          DATA_PACKET_CONTENT
        </label>
        <textarea
          id="uplink-message"
          className={`${FIELD_CLASS} resize-none`}
          placeholder="Type your message here... [Encrypted layer active]"
          required
          rows={6}
          name="message"
        />
        <div className={UNDERLINE} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        <div className="flex items-center gap-3 text-primary-fixed-dim/70 font-code-sm text-code-sm">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
          SSL_TUNNEL_ACTIVE
        </div>
        <button
          className={`group relative px-10 py-4 font-label-caps text-label-caps transition-all active:scale-95 ${
            status === 'sent'
              ? 'bg-on-primary-container text-white'
              : status === 'error'
                ? 'bg-error text-background'
                : 'bg-primary-fixed-dim text-background hover:bg-primary-container'
          }`}
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
        >
          {buttonLabel}
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-fixed-dim" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-fixed-dim" />
        </button>
      </div>
    </form>
  );
}
