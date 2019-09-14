class Noun < ApplicationRecord
  has_many :concepts
  has_many :adjectives, through: :concepts
end
