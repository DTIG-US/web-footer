import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import * as siteData from '../../data.json';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let host: HTMLElement;

  const data = (siteData as any).default;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // ── Smoke ────────────────────────────────────────────────────────────────

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Brand / tagline ──────────────────────────────────────────────────────

  it('should render the footer logo with home link', () => {
    const logo = host.querySelector<HTMLAnchorElement>('.footer-logo');
    expect(logo).toBeTruthy();
    expect(logo!.getAttribute('href')).toBe('/');
  });

  it('should render the copyright tagline from data.json', () => {
    const tagline = host.querySelector('.footer-tagline');
    expect(tagline?.textContent?.trim()).toBe(data.footer.text);
  });

  // ── Contact section ──────────────────────────────────────────────────────

  it('should render a tel: link with the correct phone number', () => {
    const tel = host.querySelector<HTMLAnchorElement>('a[href^="tel:"]');
    expect(tel).toBeTruthy();
    expect(tel!.getAttribute('href')).toBe(`tel:${data.footer.phone}`);
    expect(tel!.textContent?.trim()).toBe(data.footer.phone);
  });

  it('should render a mailto: link with the correct email', () => {
    const mail = host.querySelector<HTMLAnchorElement>('a[href^="mailto:"]');
    expect(mail).toBeTruthy();
    expect(mail!.getAttribute('href')).toBe(`mailto:${data.footer.email}`);
    expect(mail!.textContent?.trim()).toBe(data.footer.email);
  });

  // ── Resources links (data-driven via menu[0..4]) ─────────────────────────

  it('should render the first five menu items in the Resources column', () => {
    // The template hard-codes menu[0]..menu[4] in the Resources <ul>.
    // If data.json menu shrinks below 5 items this test will catch it early.
    const resourceLinks = host.querySelectorAll<HTMLAnchorElement>(
      'ul[aria-label="Resource links"] a'
    );
    expect(resourceLinks.length).toBe(5);
    for (let i = 0; i < 5; i++) {
      expect(resourceLinks[i].getAttribute('href')).toBe(data.menu[i].url);
      expect(resourceLinks[i].textContent?.trim()).toBe(data.menu[i].label);
    }
  });

  // ── Structure ────────────────────────────────────────────────────────────

  it('should render the Company, Resources, and Contact section headings', () => {
    const headings = host.querySelectorAll<HTMLElement>('.footer-heading');
    const texts = Array.from(headings).map((h) => h.textContent?.trim());
    expect(texts).toContain('Company');
    expect(texts).toContain('Resources');
    expect(texts).toContain('Contact');
  });

  it('should render Privacy Policy and Terms of Service links', () => {
    const text = host.textContent ?? '';
    expect(text).toContain('Privacy Policy');
    expect(text).toContain('Terms of Service');
  });

  // ── Accessibility ────────────────────────────────────────────────────────

  it('should have an aria-label on the footer logo link', () => {
    const logo = host.querySelector('.footer-logo');
    expect(logo?.getAttribute('aria-label')).toBeTruthy();
  });

  it('should have aria-label on the Company nav list', () => {
    const nav = host.querySelector('ul[aria-label="Company links"]');
    expect(nav).toBeTruthy();
  });

  it('should have aria-label on the Contact list', () => {
    const nav = host.querySelector('ul[aria-label="Contact information"]');
    expect(nav).toBeTruthy();
  });
});


