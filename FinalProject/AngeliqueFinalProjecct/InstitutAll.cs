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
    
    public partial class InstitutAll
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public InstitutAll()
        {
            this.FailedBanks = new HashSet<FailedBank>();
            this.InstitutesFinances = new HashSet<InstitutesFinance>();
            this.InstitutesInsurs = new HashSet<InstitutesInsur>();
        }
    
        public string INST_Id { get; set; }
        public double CERT { get; set; }
        public Nullable<double> FK_CM_Id { get; set; }
        public string BankName { get; set; }
        public string ADDRESS { get; set; }
        public string CITY { get; set; }
        public string COUNTY { get; set; }
        public string STATE { get; set; }
        public Nullable<double> ZIP { get; set; }
        public string BankWebSite { get; set; }
    
        public virtual CommercialBank CommercialBank { get; set; }
        public virtual CommercialFinance CommercialFinance { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FailedBank> FailedBanks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InstitutesFinance> InstitutesFinances { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InstitutesInsur> InstitutesInsurs { get; set; }
    }
}
