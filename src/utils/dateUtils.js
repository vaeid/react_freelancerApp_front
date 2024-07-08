export function toLocalDateShort(date) {
  return new Date(date).toLocaleString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
