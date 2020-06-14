//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngeliqueFinalProjecct
{
    using System;
    using System.Collections.Generic;
    
    public partial class FailedFinance
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FailedFinance()
        {
            this.CommercialBanks = new HashSet<CommercialBank>();
            this.CommercialFinances = new HashSet<CommercialFinance>();
        }
    
        public double FBFI_Id { get; set; }
        public Nullable<double> FK_FB_Id { get; set; }
        public Nullable<double> TotalAssets { get; set; }
        public Nullable<double> NetLoansLeases { get; set; }
        public Nullable<double> NoncurrentLloansLeases { get; set; }
        public Nullable<double> BankPremisesFixedAssets { get; set; }
        public Nullable<double> GoodwillOtherIntangibles { get; set; }
        public Nullable<double> TotalLiabilities { get; set; }
        public Nullable<double> TotalDeposits { get; set; }
        public Nullable<double> InterestBearingDeposits { get; set; }
        public Nullable<double> BankEquityCapital { get; set; }
        public Nullable<double> UndividedProfits { get; set; }
        public Nullable<double> NumberCommercialBanks { get; set; }
        public Nullable<double> NetInterestMargin { get; set; }
        public Nullable<double> PrimeLoanRate { get; set; }
        public Nullable<double> FederalFundsRate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CommercialBank> CommercialBanks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CommercialFinance> CommercialFinances { get; set; }
        public virtual FailedBank FailedBank { get; set; }
    }
}