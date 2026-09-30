import useIsMobile from '../hooks/useIsMobile';

// Booking deadlines. After the end of each date the check shows as closed.
const MENU_DEADLINE = new Date('2026-10-16T23:59:59');
const BAR_DEADLINE  = new Date('2026-11-20T23:59:59');

const CHECKS = [
  {
    key: 'menu',
    service: 'Christmas Menu GP Check',
    label: 'For restaurants and food-led pubs',
    title: 'Christmas Menu GP Check',
    price: '£395',
    deadline: MENU_DEADLINE,
    deadlineText: 'Friday 16 October',
    send: [
      'Your Christmas set menu, including any add-ons such as fizz on arrival',
      'Recipe cards for each dish, or a rough list of ingredients and portion sizes',
      'Recent ingredient costs or supplier invoices',
      'Any group discounts or drinks packages you plan to offer',
    ],
    get: [
      'Every dish costed, with its GP',
      'Your true margin per head, after VAT and any add-ons',
      'The effect of group discounts and drinks packages',
      'Specific pricing or portion changes if the numbers need work',
    ],
  },
  {
    key: 'bar',
    service: 'Christmas Bar Margin Check',
    label: 'For drinks-led pubs, bars and micropubs',
    title: 'Christmas Bar Margin Check',
    price: '£295',
    deadline: BAR_DEADLINE,
    deadlineText: 'Friday 20 November',
    send: [
      'Your current price list',
      'A few recent supplier invoices',
      'Any Christmas specials, party packages or New Year’s Eve plans',
      'No food menu needed',
    ],
    get: [
      'Every drink costed, with its GP',
      'Any prices that have fallen behind supplier increases',
      'The real margin on party packages, bar tabs and festive specials',
      'A December ordering check, so January doesn’t start with dead stock',
    ],
  },
];

const STEPS = [
  ['01', 'Get in touch', 'Choose the check you need and send an enquiry, email or call. We’ll reply within four business hours to confirm and tell you where to send your documents.'],
  ['02', 'Send your numbers', 'Menu, recipes or price list, plus recent invoices. Photos and spreadsheets are both fine. If anything is missing, we’ll ask.'],
  ['03', 'Results within 72 hours', 'Once we have everything, your written check comes back within 72 hours, with clear figures and specific changes to make.'],
  ['04', 'Talk it through', 'If anything in the check isn’t clear, reply or call and we’ll go through it together.'],
];

const FAQS = [
  ['We don’t have written recipe cards. Can we still book?', 'Yes. A rough list of ingredients and portion sizes for each dish works just as well. Many independent kitchens work this way.'],
  ['We’re a pub that does food and drink. Which check do we need?', 'If your Christmas trade is mainly set menus and parties, the Menu GP Check. If it’s mainly the bar, the Bar Margin Check. If both matter, get in touch and we’ll suggest the right option.'],
  ['When does the 72 hours start?', 'From when we have everything we need. We’ll confirm as soon as your documents are complete.'],
  ['Why the deadlines?', 'After mid-October most Christmas menus are printed and deposits are in, so changes get much harder to make. Drinks prices, packages and orders can change later, which is why the bar check runs until 20 November.'],
  ['Is everything confidential?', 'Completely. Your menus, costs and prices are only used for your check and are never shared.'],
];

const isOpen = (deadline) => new Date() <= deadline;

const ChristmasChecksPage = ({ setPage, setContactService }) => {
  const isMobile = useIsMobile();
  const sectionPad = isMobile ? '48px 24px' : '72px 48px';

  const book = (service) => {
    setContactService(service);
    setPage('Contact');
  };

  const eyebrow = (text, color = '#A27021') => (
    <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color, marginBottom: 14, fontWeight: 500 }}>{text}</div>
  );

  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <div style={{ background: '#1A2744', padding: isMobile ? '48px 24px' : '72px 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Christmas 2026
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 32 : 44, fontWeight: 500, color: '#fff', maxWidth: 640, lineHeight: 1.13, margin: 0 }}>
          Know what every Christmas cover<br />and every festive pint<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>actually earns.</em>
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 560, lineHeight: 1.75, margin: '24px 0 0' }}>
          Two quick, fixed-fee checks for independent restaurants, pubs and bars. Send us your numbers and within 72 hours you’ll know exactly where your Christmas margin stands, and what to change before the bookings come in.
        </p>
      </div>

      {/* The two checks */}
      <section style={{ padding: sectionPad }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 32 }}>
          {CHECKS.map(c => {
            const open = isOpen(c.deadline);
            return (
              <div key={c.key} className="service-card" style={{ border: '1px solid #C4BAB0', borderTop: '3px solid #A27021', borderRadius: 2, padding: isMobile ? '28px 22px' : '34px 30px', display: 'flex', flexDirection: 'column' }}>
                {eyebrow(c.label)}
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 26 : 30, fontWeight: 500, color: '#1A2744', margin: '0 0 14px', lineHeight: 1.15 }}>{c.title}</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, fontWeight: 500, color: '#1A2744', lineHeight: 1 }}>{c.price}</span>
                  <span style={{ fontSize: 13, color: '#6B6560' }}>+ VAT, fixed fee</span>
                </div>
                <div style={{ fontSize: 13, color: '#6B6560', marginBottom: 24 }}>
                  Results within 72 hours · {open ? <>Book by <strong style={{ color: '#1A2744', fontWeight: 500 }}>{c.deadlineText}</strong></> : 'Closed for 2026'}
                </div>

                <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 10, fontWeight: 500 }}>You send</div>
                <ul style={{ listStyle: 'none', margin: '0 0 22px' }}>
                  {c.send.map(s => (
                    <li key={s} style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.6, padding: '5px 0 5px 18px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: 13, width: 8, height: 1, background: '#A27021' }} />{s}
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 10, fontWeight: 500 }}>You get back</div>
                <ul style={{ listStyle: 'none', margin: '0 0 28px' }}>
                  {c.get.map(s => (
                    <li key={s} style={{ fontSize: 13, color: '#1A2744', lineHeight: 1.6, padding: '5px 0 5px 22px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: 4, color: '#A27021', fontSize: 13 }}>✓</span>{s}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto' }}>
                  {open ? (
                    <button className="btn-gold" onClick={() => book(c.service)} style={{ background: '#A27021', color: '#fff', padding: '14px 24px', borderRadius: 2, border: 'none', fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', width: '100%' }}>
                      Book the {c.key === 'menu' ? 'Menu' : 'Bar'} Check
                    </button>
                  ) : (
                    <div style={{ fontSize: 13, color: '#6B6560', padding: '13px 0', textAlign: 'center', border: '1px solid #C4BAB0', borderRadius: 2 }}>
                      Bookings for 2026 have closed
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div style={{ height: 1, background: '#C4BAB0' }} />

      {/* Worked example */}
      <section style={{ padding: sectionPad, background: '#F0F4F8' }}>
        <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
        {eyebrow('Why it matters')}
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 30 : 40, fontWeight: 500, color: '#1A2744', margin: '0 0 16px', lineHeight: 1.1 }}>
          How a Christmas menu <em style={{ fontStyle: 'italic' }}>loses its margin</em>
        </h2>
        <p style={{ fontSize: 14, color: '#6B6560', maxWidth: 580, lineHeight: 1.75, margin: '0 0 32px' }}>
          Every one of these decisions makes sense on its own. Together, they take more than ten points off your GP at the busiest time of year.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 14 : 20 }}>
          {[
            ['65%', '£45 set menu', '£37.50 after VAT, with a £13 food cost. Healthy.'],
            ['59%', 'Add fizz on arrival', '£2.50 a head of fizz and mince pies.'],
            ['54%', 'Give a party 10% off', 'A party of twelve books with a group discount.'],
          ].map(([gp, t, d]) => (
            <div key={gp} style={{ background: '#fff', border: '1px solid #C4BAB0', borderRadius: 2, padding: '24px 22px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: gp === '65%' ? '#1A2744' : '#A27021', lineHeight: 1, marginBottom: 10 }}>{gp}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#1A2744', marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.6 }}>{d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#6B6560', marginTop: 18, fontStyle: 'italic' }}>Illustrative figures, but not unusual ones. The fix isn’t to drop the extras. It’s to price them in from the start.</p>
      </section>

      {/* How it works */}
      <section style={{ padding: sectionPad }}>
        {eyebrow('How it works')}
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 30 : 40, fontWeight: 500, color: '#1A2744', margin: '0 0 36px', lineHeight: 1.1 }}>
          Simple, quick and <em style={{ fontStyle: 'italic' }}>fixed-fee</em>
        </h2>
        {STEPS.map(([n, title, desc]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: isMobile ? '44px 1fr' : '56px 1fr', gap: isMobile ? 16 : 24, alignItems: 'start', paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid #C4BAB0' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 28 : 36, fontWeight: 400, color: '#A27021', lineHeight: 1, marginTop: 2 }}>{n}</div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 500, color: '#1A2744', margin: '0 0 5px' }}>{title}</h4>
              <p style={{ fontSize: 13, color: '#6B6560', margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FAQs */}
      <section style={{ padding: sectionPad, background: '#F0F4F8' }}>
        <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
        {eyebrow('Questions')}
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 30 : 40, fontWeight: 500, color: '#1A2744', margin: '0 0 24px', lineHeight: 1.1 }}>Before you <em style={{ fontStyle: 'italic' }}>book</em></h2>
        {FAQS.map(([q, a]) => (
          <div key={q} className="faq-item" style={{ borderBottom: '1px solid #C4BAB0', padding: '22px 0' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 17 : 20, fontWeight: 600, color: '#1A2744', marginBottom: 10 }}>{q}</div>
            <div style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.75 }}>{a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div style={{ background: '#1A2744', padding: isMobile ? '56px 24px' : '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 34 : 44, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Not sure which check<br />you <em style={{ fontStyle: 'italic', color: '#A27021' }}>need?</em></h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 30px' }}>Happy to have a quick 10-minute chat first. Call 07368 168 888 or email hello@thefifthcourseconsulting.co.uk.</p>
        <button className="btn-gold" onClick={() => book('Not sure — happy to discuss')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in Touch</button>
      </div>
    </div>
  );
};

export const christmasChecksOpen = () => isOpen(BAR_DEADLINE);

export default ChristmasChecksPage;
