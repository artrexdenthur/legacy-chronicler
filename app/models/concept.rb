class Concept < ApplicationRecord
  belongs_to :adjective
  belongs_to :noun
  validates :noun_id, uniqueness: {scope: :adjective_id}

  def name
    "#{adjective.name} #{noun.name}"
  end
end
