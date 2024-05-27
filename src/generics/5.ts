export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Record для создания RoleDescription
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

console.log(RoleDescription);
