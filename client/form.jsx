import React from 'react';

export const Form = () => (
  <form action="#" role="form">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" placeholder="Enter your name..." />
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="user@example.com" />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="8 characters or more..." />
    <label htmlFor="bio">Bio</label>
    <textarea name="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
    <input type="submit" value="Create Account" className="btn--blue" />
  </form>
);
