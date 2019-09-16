class Noun < ApplicationRecord
  has_many :concepts
  has_many :adjectives, through: :concepts
  validates_presence_of :name
  validates :name, format: {with: /[a-zA-Z]/}
end
