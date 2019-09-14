class Concept < ApplicationRecord
  belongs_to :adjective
  belongs_to :noun

  def name
    "#{adjective.name} #{noun.name}"
  end
end
