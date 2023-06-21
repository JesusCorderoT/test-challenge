const removeNonCanonicalDNA = require('../dna');

test('Regresa un string vacio si es vacio', () => {
    expect(removeNonCanonicalDNA('')).toBe('');
  });

  test('Regresa el mismo string', () => {
    expect(removeNonCanonicalDNA('CTAG')).toBe('CTAG');
  });

  test('Quita las letras BXc', () => {
    expect(removeNonCanonicalDNA('CTBAXTGGc')).toBe('CTATGG');
  });

  test('Regresa un string vacio', () => {
    expect(removeNonCanonicalDNA('BHJKLjes')).toBe('');
  });
