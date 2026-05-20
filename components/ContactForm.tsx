"use client";

import React, { useState } from "react";
import { CONTACT } from "@/lib/constants";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: CONTACT.form.services[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form submitted:", formData);

    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: CONTACT.form.services[0],
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-lg mb-2">
          {CONTACT.form.successMessage}
        </p>
        <p className="text-muted text-sm">{CONTACT.responseNote}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {CONTACT.form.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={CONTACT.form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-border px-4 py-3 text-white placeholder-muted focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {CONTACT.form.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={CONTACT.form.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-surface border border-border px-4 py-3 text-white placeholder-muted focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          {CONTACT.form.companyLabel}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder={CONTACT.form.companyPlaceholder}
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-surface border border-border px-4 py-3 text-white placeholder-muted focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          {CONTACT.form.serviceLabel}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-surface border border-border px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
        >
          {CONTACT.form.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {CONTACT.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={CONTACT.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-surface border border-border px-4 py-3 text-white placeholder-muted focus:border-gold focus:outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <Button variant="primary" className="w-full md:w-auto" type="submit">
        {CONTACT.form.submitLabel}
      </Button>
    </form>
  );
}
