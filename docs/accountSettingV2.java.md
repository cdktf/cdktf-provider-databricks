# `accountSettingV2` Submodule <a name="`accountSettingV2` Submodule" id="@cdktf/provider-databricks.accountSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSettingV2 <a name="AccountSettingV2" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2 databricks_account_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2;

AccountSettingV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aibiDashboardEmbeddingAccessPolicy(AccountSettingV2AibiDashboardEmbeddingAccessPolicy)
//  .aibiDashboardEmbeddingApprovedDomains(AccountSettingV2AibiDashboardEmbeddingApprovedDomains)
//  .automaticClusterUpdateWorkspace(AccountSettingV2AutomaticClusterUpdateWorkspace)
//  .booleanVal(AccountSettingV2BooleanVal)
//  .effectiveAibiDashboardEmbeddingAccessPolicy(AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy)
//  .effectiveAibiDashboardEmbeddingApprovedDomains(AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains)
//  .effectiveAutomaticClusterUpdateWorkspace(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace)
//  .effectivePersonalCompute(AccountSettingV2EffectivePersonalCompute)
//  .effectiveRestrictWorkspaceAdmins(AccountSettingV2EffectiveRestrictWorkspaceAdmins)
//  .integerVal(AccountSettingV2IntegerVal)
//  .name(java.lang.String)
//  .personalCompute(AccountSettingV2PersonalCompute)
//  .restrictWorkspaceAdmins(AccountSettingV2RestrictWorkspaceAdmins)
//  .stringVal(AccountSettingV2StringVal)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}.

---

##### `booleanVal`<sup>Optional</sup> <a name="booleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.booleanVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}.

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effectivePersonalCompute`<sup>Optional</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectivePersonalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}.

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integerVal`<sup>Optional</sup> <a name="integerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.integerVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}.

---

##### `personalCompute`<sup>Optional</sup> <a name="personalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.personalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}.

---

##### `restrictWorkspaceAdmins`<sup>Optional</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}.

---

##### `stringVal`<sup>Optional</sup> <a name="stringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.stringVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy">putAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains">putAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace">putAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal">putBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">putEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">putEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">putEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute">putEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins">putEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal">putIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute">putPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins">putRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal">putStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy">resetAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains">resetAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAutomaticClusterUpdateWorkspace">resetAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetBooleanVal">resetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">resetEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">resetEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">resetEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectivePersonalCompute">resetEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveRestrictWorkspaceAdmins">resetEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetIntegerVal">resetIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetPersonalCompute">resetPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetRestrictWorkspaceAdmins">resetRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetStringVal">resetStringVal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAibiDashboardEmbeddingAccessPolicy` <a name="putAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void putAibiDashboardEmbeddingAccessPolicy(AccountSettingV2AibiDashboardEmbeddingAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `putAibiDashboardEmbeddingApprovedDomains` <a name="putAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void putAibiDashboardEmbeddingApprovedDomains(AccountSettingV2AibiDashboardEmbeddingApprovedDomains value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `putAutomaticClusterUpdateWorkspace` <a name="putAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```java
public void putAutomaticClusterUpdateWorkspace(AccountSettingV2AutomaticClusterUpdateWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `putBooleanVal` <a name="putBooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal"></a>

```java
public void putBooleanVal(AccountSettingV2BooleanVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

---

##### `putEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="putEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void putEffectiveAibiDashboardEmbeddingAccessPolicy(AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `putEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="putEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void putEffectiveAibiDashboardEmbeddingApprovedDomains(AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `putEffectiveAutomaticClusterUpdateWorkspace` <a name="putEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```java
public void putEffectiveAutomaticClusterUpdateWorkspace(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `putEffectivePersonalCompute` <a name="putEffectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute"></a>

```java
public void putEffectivePersonalCompute(AccountSettingV2EffectivePersonalCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

---

##### `putEffectiveRestrictWorkspaceAdmins` <a name="putEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```java
public void putEffectiveRestrictWorkspaceAdmins(AccountSettingV2EffectiveRestrictWorkspaceAdmins value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `putIntegerVal` <a name="putIntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal"></a>

```java
public void putIntegerVal(AccountSettingV2IntegerVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

---

##### `putPersonalCompute` <a name="putPersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute"></a>

```java
public void putPersonalCompute(AccountSettingV2PersonalCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

---

##### `putRestrictWorkspaceAdmins` <a name="putRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins"></a>

```java
public void putRestrictWorkspaceAdmins(AccountSettingV2RestrictWorkspaceAdmins value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

---

##### `putStringVal` <a name="putStringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal"></a>

```java
public void putStringVal(AccountSettingV2StringVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

---

##### `resetAibiDashboardEmbeddingAccessPolicy` <a name="resetAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void resetAibiDashboardEmbeddingAccessPolicy()
```

##### `resetAibiDashboardEmbeddingApprovedDomains` <a name="resetAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void resetAibiDashboardEmbeddingApprovedDomains()
```

##### `resetAutomaticClusterUpdateWorkspace` <a name="resetAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```java
public void resetAutomaticClusterUpdateWorkspace()
```

##### `resetBooleanVal` <a name="resetBooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetBooleanVal"></a>

```java
public void resetBooleanVal()
```

##### `resetEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="resetEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void resetEffectiveAibiDashboardEmbeddingAccessPolicy()
```

##### `resetEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="resetEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void resetEffectiveAibiDashboardEmbeddingApprovedDomains()
```

##### `resetEffectiveAutomaticClusterUpdateWorkspace` <a name="resetEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```java
public void resetEffectiveAutomaticClusterUpdateWorkspace()
```

##### `resetEffectivePersonalCompute` <a name="resetEffectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectivePersonalCompute"></a>

```java
public void resetEffectivePersonalCompute()
```

##### `resetEffectiveRestrictWorkspaceAdmins` <a name="resetEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```java
public void resetEffectiveRestrictWorkspaceAdmins()
```

##### `resetIntegerVal` <a name="resetIntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetIntegerVal"></a>

```java
public void resetIntegerVal()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetName"></a>

```java
public void resetName()
```

##### `resetPersonalCompute` <a name="resetPersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetPersonalCompute"></a>

```java
public void resetPersonalCompute()
```

##### `resetRestrictWorkspaceAdmins` <a name="resetRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetRestrictWorkspaceAdmins"></a>

```java
public void resetRestrictWorkspaceAdmins()
```

##### `resetStringVal` <a name="resetStringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetStringVal"></a>

```java
public void resetStringVal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2;

AccountSettingV2.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2;

AccountSettingV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2;

AccountSettingV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2;

AccountSettingV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccountSettingV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccountSettingV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccountSettingV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccountSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccountSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference">AccountSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveBooleanVal">effectiveBooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference">AccountSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveIntegerVal">effectiveIntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference">AccountSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference">AccountSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveStringVal">effectiveStringVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference">AccountSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference">AccountSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference">AccountSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference">AccountSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference">AccountSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">aibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">aibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspaceInput">automaticClusterUpdateWorkspaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanValInput">booleanValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">effectiveAibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">effectiveAibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">effectiveAutomaticClusterUpdateWorkspaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalComputeInput">effectivePersonalComputeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput">effectiveRestrictWorkspaceAdminsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerValInput">integerValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalComputeInput">personalComputeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdminsInput">restrictWorkspaceAdminsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringValInput">stringValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```java
public AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference getAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```java
public AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference getAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `automaticClusterUpdateWorkspace`<sup>Required</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspace"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference getAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `booleanVal`<sup>Required</sup> <a name="booleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanVal"></a>

```java
public AccountSettingV2BooleanValOutputReference getBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference">AccountSettingV2BooleanValOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference getEffectiveAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference getEffectiveAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference getEffectiveAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `effectiveBooleanVal`<sup>Required</sup> <a name="effectiveBooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveBooleanVal"></a>

```java
public AccountSettingV2EffectiveBooleanValOutputReference getEffectiveBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference">AccountSettingV2EffectiveBooleanValOutputReference</a>

---

##### `effectiveIntegerVal`<sup>Required</sup> <a name="effectiveIntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveIntegerVal"></a>

```java
public AccountSettingV2EffectiveIntegerValOutputReference getEffectiveIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference">AccountSettingV2EffectiveIntegerValOutputReference</a>

---

##### `effectivePersonalCompute`<sup>Required</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalCompute"></a>

```java
public AccountSettingV2EffectivePersonalComputeOutputReference getEffectivePersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference">AccountSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Required</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```java
public AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference getEffectiveRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `effectiveStringVal`<sup>Required</sup> <a name="effectiveStringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveStringVal"></a>

```java
public AccountSettingV2EffectiveStringValOutputReference getEffectiveStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference">AccountSettingV2EffectiveStringValOutputReference</a>

---

##### `integerVal`<sup>Required</sup> <a name="integerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerVal"></a>

```java
public AccountSettingV2IntegerValOutputReference getIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference">AccountSettingV2IntegerValOutputReference</a>

---

##### `personalCompute`<sup>Required</sup> <a name="personalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalCompute"></a>

```java
public AccountSettingV2PersonalComputeOutputReference getPersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference">AccountSettingV2PersonalComputeOutputReference</a>

---

##### `restrictWorkspaceAdmins`<sup>Required</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdmins"></a>

```java
public AccountSettingV2RestrictWorkspaceAdminsOutputReference getRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference">AccountSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `stringVal`<sup>Required</sup> <a name="stringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringVal"></a>

```java
public AccountSettingV2StringValOutputReference getStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference">AccountSettingV2StringValOutputReference</a>

---

##### `aibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```java
public IResolvable|AccountSettingV2AibiDashboardEmbeddingAccessPolicy getAibiDashboardEmbeddingAccessPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `aibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```java
public IResolvable|AccountSettingV2AibiDashboardEmbeddingApprovedDomains getAibiDashboardEmbeddingApprovedDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `automaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspace getAutomaticClusterUpdateWorkspaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `booleanValInput`<sup>Optional</sup> <a name="booleanValInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanValInput"></a>

```java
public IResolvable|AccountSettingV2BooleanVal getBooleanValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy getEffectiveAibiDashboardEmbeddingAccessPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains getEffectiveAibiDashboardEmbeddingApprovedDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `effectiveAutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace getEffectiveAutomaticClusterUpdateWorkspaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `effectivePersonalComputeInput`<sup>Optional</sup> <a name="effectivePersonalComputeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalComputeInput"></a>

```java
public IResolvable|AccountSettingV2EffectivePersonalCompute getEffectivePersonalComputeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

---

##### `effectiveRestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveRestrictWorkspaceAdmins getEffectiveRestrictWorkspaceAdminsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `integerValInput`<sup>Optional</sup> <a name="integerValInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerValInput"></a>

```java
public IResolvable|AccountSettingV2IntegerVal getIntegerValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `personalComputeInput`<sup>Optional</sup> <a name="personalComputeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalComputeInput"></a>

```java
public IResolvable|AccountSettingV2PersonalCompute getPersonalComputeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

---

##### `restrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="restrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdminsInput"></a>

```java
public IResolvable|AccountSettingV2RestrictWorkspaceAdmins getRestrictWorkspaceAdminsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

---

##### `stringValInput`<sup>Optional</sup> <a name="stringValInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringValInput"></a>

```java
public IResolvable|AccountSettingV2StringVal getStringValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSettingV2AibiDashboardEmbeddingAccessPolicy <a name="AccountSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy;

AccountSettingV2AibiDashboardEmbeddingAccessPolicy.builder()
    .accessPolicyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

### AccountSettingV2AibiDashboardEmbeddingApprovedDomains <a name="AccountSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains;

AccountSettingV2AibiDashboardEmbeddingApprovedDomains.builder()
//  .approvedDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspace <a name="AccountSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspace;

AccountSettingV2AutomaticClusterUpdateWorkspace.builder()
//  .canToggle(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .enablementDetails(AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails)
//  .maintenanceWindow(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow)
//  .restartEvenIfNoUpdatesAvailable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```java
public java.lang.Boolean|IResolvable getCanToggle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;

AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.builder()
//  .forcedForComplianceMode(java.lang.Boolean|IResolvable)
//  .unavailableForDisabledEntitlement(java.lang.Boolean|IResolvable)
//  .unavailableForNonEnterpriseTier(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;

AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.builder()
//  .weekDayBasedSchedule(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;

AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.builder()
//  .dayOfWeek(java.lang.String)
//  .frequency(java.lang.String)
//  .windowStartTime(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;

AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

### AccountSettingV2BooleanVal <a name="AccountSettingV2BooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2BooleanVal;

AccountSettingV2BooleanVal.builder()
//  .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.property.value">value</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2Config <a name="AccountSettingV2Config" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2Config;

AccountSettingV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aibiDashboardEmbeddingAccessPolicy(AccountSettingV2AibiDashboardEmbeddingAccessPolicy)
//  .aibiDashboardEmbeddingApprovedDomains(AccountSettingV2AibiDashboardEmbeddingApprovedDomains)
//  .automaticClusterUpdateWorkspace(AccountSettingV2AutomaticClusterUpdateWorkspace)
//  .booleanVal(AccountSettingV2BooleanVal)
//  .effectiveAibiDashboardEmbeddingAccessPolicy(AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy)
//  .effectiveAibiDashboardEmbeddingApprovedDomains(AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains)
//  .effectiveAutomaticClusterUpdateWorkspace(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace)
//  .effectivePersonalCompute(AccountSettingV2EffectivePersonalCompute)
//  .effectiveRestrictWorkspaceAdmins(AccountSettingV2EffectiveRestrictWorkspaceAdmins)
//  .integerVal(AccountSettingV2IntegerVal)
//  .name(java.lang.String)
//  .personalCompute(AccountSettingV2PersonalCompute)
//  .restrictWorkspaceAdmins(AccountSettingV2RestrictWorkspaceAdmins)
//  .stringVal(AccountSettingV2StringVal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```java
public AccountSettingV2AibiDashboardEmbeddingAccessPolicy getAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```java
public AccountSettingV2AibiDashboardEmbeddingApprovedDomains getAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspace getAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}.

---

##### `booleanVal`<sup>Optional</sup> <a name="booleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.booleanVal"></a>

```java
public AccountSettingV2BooleanVal getBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}.

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy getEffectiveAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains getEffectiveAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace getEffectiveAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effectivePersonalCompute`<sup>Optional</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectivePersonalCompute"></a>

```java
public AccountSettingV2EffectivePersonalCompute getEffectivePersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}.

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```java
public AccountSettingV2EffectiveRestrictWorkspaceAdmins getEffectiveRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integerVal`<sup>Optional</sup> <a name="integerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.integerVal"></a>

```java
public AccountSettingV2IntegerVal getIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}.

---

##### `personalCompute`<sup>Optional</sup> <a name="personalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.personalCompute"></a>

```java
public AccountSettingV2PersonalCompute getPersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}.

---

##### `restrictWorkspaceAdmins`<sup>Optional</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.restrictWorkspaceAdmins"></a>

```java
public AccountSettingV2RestrictWorkspaceAdmins getRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}.

---

##### `stringVal`<sup>Optional</sup> <a name="stringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.stringVal"></a>

```java
public AccountSettingV2StringVal getStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}.

---

### AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;

AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.builder()
    .accessPolicyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

### AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;

AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.builder()
//  .approvedDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace;

AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.builder()
//  .canToggle(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .enablementDetails(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails)
//  .maintenanceWindow(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow)
//  .restartEvenIfNoUpdatesAvailable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```java
public java.lang.Boolean|IResolvable getCanToggle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;

AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.builder()
//  .forcedForComplianceMode(java.lang.Boolean|IResolvable)
//  .unavailableForDisabledEntitlement(java.lang.Boolean|IResolvable)
//  .unavailableForNonEnterpriseTier(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;

AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.builder()
//  .weekDayBasedSchedule(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;

AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.builder()
//  .dayOfWeek(java.lang.String)
//  .frequency(java.lang.String)
//  .windowStartTime(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;

AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

### AccountSettingV2EffectiveBooleanVal <a name="AccountSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveBooleanVal;

AccountSettingV2EffectiveBooleanVal.builder()
//  .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.property.value">value</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectiveIntegerVal <a name="AccountSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveIntegerVal;

AccountSettingV2EffectiveIntegerVal.builder()
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectivePersonalCompute <a name="AccountSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectivePersonalCompute;

AccountSettingV2EffectivePersonalCompute.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectiveRestrictWorkspaceAdmins <a name="AccountSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveRestrictWorkspaceAdmins;

AccountSettingV2EffectiveRestrictWorkspaceAdmins.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

### AccountSettingV2EffectiveStringVal <a name="AccountSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveStringVal;

AccountSettingV2EffectiveStringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2IntegerVal <a name="AccountSettingV2IntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2IntegerVal;

AccountSettingV2IntegerVal.builder()
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2PersonalCompute <a name="AccountSettingV2PersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2PersonalCompute;

AccountSettingV2PersonalCompute.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2RestrictWorkspaceAdmins <a name="AccountSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2RestrictWorkspaceAdmins;

AccountSettingV2RestrictWorkspaceAdmins.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

### AccountSettingV2StringVal <a name="AccountSettingV2StringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2StringVal;

AccountSettingV2StringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference;

new AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```java
public java.lang.String getAccessPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AibiDashboardEmbeddingAccessPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference;

new AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```java
public void resetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getApprovedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AibiDashboardEmbeddingApprovedDomains getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;

new AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```java
public void resetForcedForComplianceMode()
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```java
public void resetUnavailableForDisabledEntitlement()
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```java
public void resetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceModeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlementInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTierInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;

new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```java
public void putWeekDayBasedSchedule(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```java
public void resetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;

new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```java
public void putWindowStartTime(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTimeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;

new AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference;

new AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```java
public void putEnablementDetails(AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```java
public void resetCanToggle()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```java
public void resetEnablementDetails()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```java
public void resetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```java
public AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```java
public java.lang.Boolean|IResolvable getCanToggleInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```java
public java.lang.Boolean|IResolvable getCanToggle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2AutomaticClusterUpdateWorkspace getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

---


### AccountSettingV2BooleanValOutputReference <a name="AccountSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2BooleanValOutputReference;

new AccountSettingV2BooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2BooleanVal getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

---


### AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference;

new AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```java
public java.lang.String getAccessPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference;

new AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```java
public void resetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getApprovedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;

new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```java
public void resetForcedForComplianceMode()
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```java
public void resetUnavailableForDisabledEntitlement()
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```java
public void resetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceModeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlementInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTierInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```java
public java.lang.Boolean|IResolvable getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Boolean|IResolvable getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;

new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```java
public void putWeekDayBasedSchedule(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```java
public void resetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;

new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```java
public void putWindowStartTime(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTimeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;

new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference;

new AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```java
public void putEnablementDetails(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```java
public void resetCanToggle()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```java
public void resetEnablementDetails()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```java
public void resetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```java
public AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```java
public java.lang.Boolean|IResolvable getCanToggleInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```java
public java.lang.Boolean|IResolvable getCanToggle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Boolean|IResolvable getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### AccountSettingV2EffectiveBooleanValOutputReference <a name="AccountSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveBooleanValOutputReference;

new AccountSettingV2EffectiveBooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal">AccountSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```java
public AccountSettingV2EffectiveBooleanVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal">AccountSettingV2EffectiveBooleanVal</a>

---


### AccountSettingV2EffectiveIntegerValOutputReference <a name="AccountSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveIntegerValOutputReference;

new AccountSettingV2EffectiveIntegerValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal">AccountSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```java
public AccountSettingV2EffectiveIntegerVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal">AccountSettingV2EffectiveIntegerVal</a>

---


### AccountSettingV2EffectivePersonalComputeOutputReference <a name="AccountSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectivePersonalComputeOutputReference;

new AccountSettingV2EffectivePersonalComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectivePersonalCompute getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

---


### AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference;

new AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2EffectiveRestrictWorkspaceAdmins getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### AccountSettingV2EffectiveStringValOutputReference <a name="AccountSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2EffectiveStringValOutputReference;

new AccountSettingV2EffectiveStringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal">AccountSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```java
public AccountSettingV2EffectiveStringVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal">AccountSettingV2EffectiveStringVal</a>

---


### AccountSettingV2IntegerValOutputReference <a name="AccountSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2IntegerValOutputReference;

new AccountSettingV2IntegerValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2IntegerVal getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

---


### AccountSettingV2PersonalComputeOutputReference <a name="AccountSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2PersonalComputeOutputReference;

new AccountSettingV2PersonalComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2PersonalCompute getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

---


### AccountSettingV2RestrictWorkspaceAdminsOutputReference <a name="AccountSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2RestrictWorkspaceAdminsOutputReference;

new AccountSettingV2RestrictWorkspaceAdminsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2RestrictWorkspaceAdmins getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

---


### AccountSettingV2StringValOutputReference <a name="AccountSettingV2StringValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_setting_v2.AccountSettingV2StringValOutputReference;

new AccountSettingV2StringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountSettingV2StringVal getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

---



