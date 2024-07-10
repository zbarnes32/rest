import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatSchema } from '../models/Rat.js';
import { LocationSchema } from '../models/Location.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Rats = mongoose.model('Rat', RatSchema);
  Account = mongoose.model('Account', AccountSchema);
  Locations = mongoose.model('Location', LocationSchema);
}

export const dbContext = new DbContext()
