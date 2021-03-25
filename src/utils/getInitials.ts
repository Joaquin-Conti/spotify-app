export const getInitials = (stringName: string) => {
  const fullName = stringName.split(' ')
  const initials = fullName.shift()!.charAt(0) + fullName.pop()!.charAt(0);
  return initials.toUpperCase();
}