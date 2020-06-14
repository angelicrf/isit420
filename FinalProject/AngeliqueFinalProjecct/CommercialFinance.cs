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
    
    public partial class CommercialFinance
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CommercialFinance()
        {
            this.InstitutAlls = new HashSet<InstitutAll>();
            this.InstitutesFinances = new HashSet<InstitutesFinance>();
            this.InstitutesInsurs = new HashSet<InstitutesInsur>();
        }
    
        public double CMFI_Id { get; set; }
        public Nullable<double> FK_CM_Id { get; set; }
        public Nullable<double> FK_FB_Id { get; set; }
        public string TransactionType { get; set; }
        public Nullable<double> TotalDeposits { get; set; }
        public Nullable<double> TotalAssets { get; set; }
        public string InsuranceFund { get; set; }
    
        public virtual CommercialBank CommercialBank { get; set; }
        public virtual FailedBank FailedBank { get; set; }
        public virtual FailedFinance FailedFinance { get; set; }
        public virtual FailedGDP FailedGDP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InstitutAll> InstitutAlls { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InstitutesFinance> InstitutesFinances { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InstitutesInsur> InstitutesInsurs { get; set; }
    }
}