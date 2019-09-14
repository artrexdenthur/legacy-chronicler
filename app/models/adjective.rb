class Adjective < ApplicationRecord
  has_many :concepts
  has_many :nouns, through: :concepts
end
