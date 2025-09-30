# `dataDatabricksAccountSettingV2` Submodule <a name="`dataDatabricksAccountSettingV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountSettingV2 <a name="DataDatabricksAccountSettingV2" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2 databricks_account_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2;

DataDatabricksAccountSettingV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .aibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy)
//  .aibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains)
//  .automaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace)
//  .booleanVal(DataDatabricksAccountSettingV2BooleanVal)
//  .effectiveAibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy)
//  .effectiveAibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains)
//  .effectiveAutomaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace)
//  .effectivePersonalCompute(DataDatabricksAccountSettingV2EffectivePersonalCompute)
//  .effectiveRestrictWorkspaceAdmins(DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins)
//  .integerVal(DataDatabricksAccountSettingV2IntegerVal)
//  .name(java.lang.String)
//  .personalCompute(DataDatabricksAccountSettingV2PersonalCompute)
//  .restrictWorkspaceAdmins(DataDatabricksAccountSettingV2RestrictWorkspaceAdmins)
//  .stringVal(DataDatabricksAccountSettingV2StringVal)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#automatic_cluster_update_workspace DataDatabricksAccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#boolean_val DataDatabricksAccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksAccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_personal_compute DataDatabricksAccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_restrict_workspace_admins DataDatabricksAccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#integer_val DataDatabricksAccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#name DataDatabricksAccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#personal_compute DataDatabricksAccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restrict_workspace_admins DataDatabricksAccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#string_val DataDatabricksAccountSettingV2#string_val}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#automatic_cluster_update_workspace DataDatabricksAccountSettingV2#automatic_cluster_update_workspace}.

---

##### `booleanVal`<sup>Optional</sup> <a name="booleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.booleanVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#boolean_val DataDatabricksAccountSettingV2#boolean_val}.

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksAccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effectivePersonalCompute`<sup>Optional</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectivePersonalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_personal_compute DataDatabricksAccountSettingV2#effective_personal_compute}.

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_restrict_workspace_admins DataDatabricksAccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integerVal`<sup>Optional</sup> <a name="integerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.integerVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#integer_val DataDatabricksAccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#name DataDatabricksAccountSettingV2#name}.

---

##### `personalCompute`<sup>Optional</sup> <a name="personalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.personalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#personal_compute DataDatabricksAccountSettingV2#personal_compute}.

---

##### `restrictWorkspaceAdmins`<sup>Optional</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restrict_workspace_admins DataDatabricksAccountSettingV2#restrict_workspace_admins}.

---

##### `stringVal`<sup>Optional</sup> <a name="stringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.Initializer.parameter.stringVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#string_val DataDatabricksAccountSettingV2#string_val}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingAccessPolicy">putAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingApprovedDomains">putAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAutomaticClusterUpdateWorkspace">putAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putBooleanVal">putBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">putEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">putEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">putEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectivePersonalCompute">putEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveRestrictWorkspaceAdmins">putEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putIntegerVal">putIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putPersonalCompute">putPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putRestrictWorkspaceAdmins">putRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putStringVal">putStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy">resetAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains">resetAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAutomaticClusterUpdateWorkspace">resetAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetBooleanVal">resetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">resetEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">resetEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">resetEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectivePersonalCompute">resetEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveRestrictWorkspaceAdmins">resetEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetIntegerVal">resetIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetPersonalCompute">resetPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetRestrictWorkspaceAdmins">resetRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetStringVal">resetStringVal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAibiDashboardEmbeddingAccessPolicy` <a name="putAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void putAibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `putAibiDashboardEmbeddingApprovedDomains` <a name="putAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void putAibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `putAutomaticClusterUpdateWorkspace` <a name="putAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```java
public void putAutomaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `putBooleanVal` <a name="putBooleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putBooleanVal"></a>

```java
public void putBooleanVal(DataDatabricksAccountSettingV2BooleanVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a>

---

##### `putEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="putEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void putEffectiveAibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `putEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="putEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void putEffectiveAibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `putEffectiveAutomaticClusterUpdateWorkspace` <a name="putEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```java
public void putEffectiveAutomaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `putEffectivePersonalCompute` <a name="putEffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectivePersonalCompute"></a>

```java
public void putEffectivePersonalCompute(DataDatabricksAccountSettingV2EffectivePersonalCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a>

---

##### `putEffectiveRestrictWorkspaceAdmins` <a name="putEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```java
public void putEffectiveRestrictWorkspaceAdmins(DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `putIntegerVal` <a name="putIntegerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putIntegerVal"></a>

```java
public void putIntegerVal(DataDatabricksAccountSettingV2IntegerVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a>

---

##### `putPersonalCompute` <a name="putPersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putPersonalCompute"></a>

```java
public void putPersonalCompute(DataDatabricksAccountSettingV2PersonalCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a>

---

##### `putRestrictWorkspaceAdmins` <a name="putRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putRestrictWorkspaceAdmins"></a>

```java
public void putRestrictWorkspaceAdmins(DataDatabricksAccountSettingV2RestrictWorkspaceAdmins value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a>

---

##### `putStringVal` <a name="putStringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putStringVal"></a>

```java
public void putStringVal(DataDatabricksAccountSettingV2StringVal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a>

---

##### `resetAibiDashboardEmbeddingAccessPolicy` <a name="resetAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void resetAibiDashboardEmbeddingAccessPolicy()
```

##### `resetAibiDashboardEmbeddingApprovedDomains` <a name="resetAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void resetAibiDashboardEmbeddingApprovedDomains()
```

##### `resetAutomaticClusterUpdateWorkspace` <a name="resetAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```java
public void resetAutomaticClusterUpdateWorkspace()
```

##### `resetBooleanVal` <a name="resetBooleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetBooleanVal"></a>

```java
public void resetBooleanVal()
```

##### `resetEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="resetEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public void resetEffectiveAibiDashboardEmbeddingAccessPolicy()
```

##### `resetEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="resetEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public void resetEffectiveAibiDashboardEmbeddingApprovedDomains()
```

##### `resetEffectiveAutomaticClusterUpdateWorkspace` <a name="resetEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```java
public void resetEffectiveAutomaticClusterUpdateWorkspace()
```

##### `resetEffectivePersonalCompute` <a name="resetEffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectivePersonalCompute"></a>

```java
public void resetEffectivePersonalCompute()
```

##### `resetEffectiveRestrictWorkspaceAdmins` <a name="resetEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```java
public void resetEffectiveRestrictWorkspaceAdmins()
```

##### `resetIntegerVal` <a name="resetIntegerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetIntegerVal"></a>

```java
public void resetIntegerVal()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetName"></a>

```java
public void resetName()
```

##### `resetPersonalCompute` <a name="resetPersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetPersonalCompute"></a>

```java
public void resetPersonalCompute()
```

##### `resetRestrictWorkspaceAdmins` <a name="resetRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetRestrictWorkspaceAdmins"></a>

```java
public void resetRestrictWorkspaceAdmins()
```

##### `resetStringVal` <a name="resetStringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.resetStringVal"></a>

```java
public void resetStringVal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2;

DataDatabricksAccountSettingV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2;

DataDatabricksAccountSettingV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2;

DataDatabricksAccountSettingV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2;

DataDatabricksAccountSettingV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAccountSettingV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksAccountSettingV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAccountSettingV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAccountSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference">DataDatabricksAccountSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveBooleanVal">effectiveBooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveIntegerVal">effectiveIntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference">DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference">DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveStringVal">effectiveStringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference">DataDatabricksAccountSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference">DataDatabricksAccountSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference">DataDatabricksAccountSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference">DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference">DataDatabricksAccountSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">aibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">aibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.automaticClusterUpdateWorkspaceInput">automaticClusterUpdateWorkspaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.booleanValInput">booleanValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">effectiveAibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">effectiveAibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">effectiveAutomaticClusterUpdateWorkspaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectivePersonalComputeInput">effectivePersonalComputeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput">effectiveRestrictWorkspaceAdminsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.integerValInput">integerValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.personalComputeInput">personalComputeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.restrictWorkspaceAdminsInput">restrictWorkspaceAdminsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.stringValInput">stringValInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```java
public DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference getAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```java
public DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference getAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `automaticClusterUpdateWorkspace`<sup>Required</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.automaticClusterUpdateWorkspace"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference getAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `booleanVal`<sup>Required</sup> <a name="booleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.booleanVal"></a>

```java
public DataDatabricksAccountSettingV2BooleanValOutputReference getBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference">DataDatabricksAccountSettingV2BooleanValOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference getEffectiveAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference getEffectiveAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference getEffectiveAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `effectiveBooleanVal`<sup>Required</sup> <a name="effectiveBooleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveBooleanVal"></a>

```java
public DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference getEffectiveBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference</a>

---

##### `effectiveIntegerVal`<sup>Required</sup> <a name="effectiveIntegerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveIntegerVal"></a>

```java
public DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference getEffectiveIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference">DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference</a>

---

##### `effectivePersonalCompute`<sup>Required</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectivePersonalCompute"></a>

```java
public DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference getEffectivePersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference">DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Required</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```java
public DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference getEffectiveRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `effectiveStringVal`<sup>Required</sup> <a name="effectiveStringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveStringVal"></a>

```java
public DataDatabricksAccountSettingV2EffectiveStringValOutputReference getEffectiveStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference">DataDatabricksAccountSettingV2EffectiveStringValOutputReference</a>

---

##### `integerVal`<sup>Required</sup> <a name="integerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.integerVal"></a>

```java
public DataDatabricksAccountSettingV2IntegerValOutputReference getIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference">DataDatabricksAccountSettingV2IntegerValOutputReference</a>

---

##### `personalCompute`<sup>Required</sup> <a name="personalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.personalCompute"></a>

```java
public DataDatabricksAccountSettingV2PersonalComputeOutputReference getPersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference">DataDatabricksAccountSettingV2PersonalComputeOutputReference</a>

---

##### `restrictWorkspaceAdmins`<sup>Required</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.restrictWorkspaceAdmins"></a>

```java
public DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference getRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference">DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `stringVal`<sup>Required</sup> <a name="stringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.stringVal"></a>

```java
public DataDatabricksAccountSettingV2StringValOutputReference getStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference">DataDatabricksAccountSettingV2StringValOutputReference</a>

---

##### `aibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```java
public java.lang.Object getAibiDashboardEmbeddingAccessPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `aibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```java
public java.lang.Object getAibiDashboardEmbeddingApprovedDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `automaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```java
public java.lang.Object getAutomaticClusterUpdateWorkspaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `booleanValInput`<sup>Optional</sup> <a name="booleanValInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.booleanValInput"></a>

```java
public java.lang.Object getBooleanValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```java
public java.lang.Object getEffectiveAibiDashboardEmbeddingAccessPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```java
public java.lang.Object getEffectiveAibiDashboardEmbeddingApprovedDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `effectiveAutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```java
public java.lang.Object getEffectiveAutomaticClusterUpdateWorkspaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `effectivePersonalComputeInput`<sup>Optional</sup> <a name="effectivePersonalComputeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectivePersonalComputeInput"></a>

```java
public java.lang.Object getEffectivePersonalComputeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a>

---

##### `effectiveRestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```java
public java.lang.Object getEffectiveRestrictWorkspaceAdminsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `integerValInput`<sup>Optional</sup> <a name="integerValInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.integerValInput"></a>

```java
public java.lang.Object getIntegerValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `personalComputeInput`<sup>Optional</sup> <a name="personalComputeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.personalComputeInput"></a>

```java
public java.lang.Object getPersonalComputeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a>

---

##### `restrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="restrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.restrictWorkspaceAdminsInput"></a>

```java
public java.lang.Object getRestrictWorkspaceAdminsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a>

---

##### `stringValInput`<sup>Optional</sup> <a name="stringValInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.stringValInput"></a>

```java
public java.lang.Object getStringValInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy <a name="DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy;

DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy.builder()
    .accessPolicyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}.

---

### DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains <a name="DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains;

DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains.builder()
//  .approvedDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}.

---

### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace;

DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.builder()
//  .canToggle(java.lang.Boolean)
//  .canToggle(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enablementDetails(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails)
//  .maintenanceWindow(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow)
//  .restartEvenIfNoUpdatesAvailable(java.lang.Boolean)
//  .restartEvenIfNoUpdatesAvailable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```java
public java.lang.Object getCanToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}.

---

### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;

DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.builder()
//  .forcedForComplianceMode(java.lang.Boolean)
//  .forcedForComplianceMode(IResolvable)
//  .unavailableForDisabledEntitlement(java.lang.Boolean)
//  .unavailableForDisabledEntitlement(IResolvable)
//  .unavailableForNonEnterpriseTier(java.lang.Boolean)
//  .unavailableForNonEnterpriseTier(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```java
public java.lang.Object getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;

DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.builder()
//  .weekDayBasedSchedule(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}.

---

### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;

DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.builder()
//  .dayOfWeek(java.lang.String)
//  .frequency(java.lang.String)
//  .windowStartTime(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}.

---

### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;

DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}.

---

### DataDatabricksAccountSettingV2BooleanVal <a name="DataDatabricksAccountSettingV2BooleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2BooleanVal;

DataDatabricksAccountSettingV2BooleanVal.builder()
//  .value(java.lang.Boolean)
//  .value(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2Config <a name="DataDatabricksAccountSettingV2Config" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2Config;

DataDatabricksAccountSettingV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .aibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy)
//  .aibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains)
//  .automaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace)
//  .booleanVal(DataDatabricksAccountSettingV2BooleanVal)
//  .effectiveAibiDashboardEmbeddingAccessPolicy(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy)
//  .effectiveAibiDashboardEmbeddingApprovedDomains(DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains)
//  .effectiveAutomaticClusterUpdateWorkspace(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace)
//  .effectivePersonalCompute(DataDatabricksAccountSettingV2EffectivePersonalCompute)
//  .effectiveRestrictWorkspaceAdmins(DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins)
//  .integerVal(DataDatabricksAccountSettingV2IntegerVal)
//  .name(java.lang.String)
//  .personalCompute(DataDatabricksAccountSettingV2PersonalCompute)
//  .restrictWorkspaceAdmins(DataDatabricksAccountSettingV2RestrictWorkspaceAdmins)
//  .stringVal(DataDatabricksAccountSettingV2StringVal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#automatic_cluster_update_workspace DataDatabricksAccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#boolean_val DataDatabricksAccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksAccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_personal_compute DataDatabricksAccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_restrict_workspace_admins DataDatabricksAccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#integer_val DataDatabricksAccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#name DataDatabricksAccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#personal_compute DataDatabricksAccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restrict_workspace_admins DataDatabricksAccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#string_val DataDatabricksAccountSettingV2#string_val}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```java
public DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy getAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```java
public DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains getAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace getAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#automatic_cluster_update_workspace DataDatabricksAccountSettingV2#automatic_cluster_update_workspace}.

---

##### `booleanVal`<sup>Optional</sup> <a name="booleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.booleanVal"></a>

```java
public DataDatabricksAccountSettingV2BooleanVal getBooleanVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#boolean_val DataDatabricksAccountSettingV2#boolean_val}.

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy getEffectiveAibiDashboardEmbeddingAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains getEffectiveAibiDashboardEmbeddingApprovedDomains();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksAccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace getEffectiveAutomaticClusterUpdateWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksAccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effectivePersonalCompute`<sup>Optional</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectivePersonalCompute"></a>

```java
public DataDatabricksAccountSettingV2EffectivePersonalCompute getEffectivePersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_personal_compute DataDatabricksAccountSettingV2#effective_personal_compute}.

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```java
public DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins getEffectiveRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#effective_restrict_workspace_admins DataDatabricksAccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integerVal`<sup>Optional</sup> <a name="integerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.integerVal"></a>

```java
public DataDatabricksAccountSettingV2IntegerVal getIntegerVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#integer_val DataDatabricksAccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#name DataDatabricksAccountSettingV2#name}.

---

##### `personalCompute`<sup>Optional</sup> <a name="personalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.personalCompute"></a>

```java
public DataDatabricksAccountSettingV2PersonalCompute getPersonalCompute();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#personal_compute DataDatabricksAccountSettingV2#personal_compute}.

---

##### `restrictWorkspaceAdmins`<sup>Optional</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.restrictWorkspaceAdmins"></a>

```java
public DataDatabricksAccountSettingV2RestrictWorkspaceAdmins getRestrictWorkspaceAdmins();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restrict_workspace_admins DataDatabricksAccountSettingV2#restrict_workspace_admins}.

---

##### `stringVal`<sup>Optional</sup> <a name="stringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2Config.property.stringVal"></a>

```java
public DataDatabricksAccountSettingV2StringVal getStringVal();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#string_val DataDatabricksAccountSettingV2#string_val}.

---

### DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;

DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.builder()
    .accessPolicyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#access_policy_type DataDatabricksAccountSettingV2#access_policy_type}.

---

### DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;

DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.builder()
//  .approvedDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#approved_domains DataDatabricksAccountSettingV2#approved_domains}.

---

### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace;

DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.builder()
//  .canToggle(java.lang.Boolean)
//  .canToggle(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enablementDetails(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails)
//  .maintenanceWindow(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow)
//  .restartEvenIfNoUpdatesAvailable(java.lang.Boolean)
//  .restartEvenIfNoUpdatesAvailable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```java
public java.lang.Object getCanToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#can_toggle DataDatabricksAccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enabled DataDatabricksAccountSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#enablement_details DataDatabricksAccountSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#maintenance_window DataDatabricksAccountSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#restart_even_if_no_updates_available DataDatabricksAccountSettingV2#restart_even_if_no_updates_available}.

---

### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;

DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.builder()
//  .forcedForComplianceMode(java.lang.Boolean)
//  .forcedForComplianceMode(IResolvable)
//  .unavailableForDisabledEntitlement(java.lang.Boolean)
//  .unavailableForDisabledEntitlement(IResolvable)
//  .unavailableForNonEnterpriseTier(java.lang.Boolean)
//  .unavailableForNonEnterpriseTier(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```java
public java.lang.Object getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#forced_for_compliance_mode DataDatabricksAccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_disabled_entitlement DataDatabricksAccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksAccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;

DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.builder()
//  .weekDayBasedSchedule(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#week_day_based_schedule DataDatabricksAccountSettingV2#week_day_based_schedule}.

---

### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;

DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.builder()
//  .dayOfWeek(java.lang.String)
//  .frequency(java.lang.String)
//  .windowStartTime(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#day_of_week DataDatabricksAccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#frequency DataDatabricksAccountSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#window_start_time DataDatabricksAccountSettingV2#window_start_time}.

---

### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;

DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#hours DataDatabricksAccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#minutes DataDatabricksAccountSettingV2#minutes}.

---

### DataDatabricksAccountSettingV2EffectiveBooleanVal <a name="DataDatabricksAccountSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveBooleanVal;

DataDatabricksAccountSettingV2EffectiveBooleanVal.builder()
//  .value(java.lang.Boolean)
//  .value(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2EffectiveIntegerVal <a name="DataDatabricksAccountSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveIntegerVal;

DataDatabricksAccountSettingV2EffectiveIntegerVal.builder()
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2EffectivePersonalCompute <a name="DataDatabricksAccountSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectivePersonalCompute;

DataDatabricksAccountSettingV2EffectivePersonalCompute.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins <a name="DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins;

DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}.

---

### DataDatabricksAccountSettingV2EffectiveStringVal <a name="DataDatabricksAccountSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveStringVal;

DataDatabricksAccountSettingV2EffectiveStringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2IntegerVal <a name="DataDatabricksAccountSettingV2IntegerVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2IntegerVal;

DataDatabricksAccountSettingV2IntegerVal.builder()
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2PersonalCompute <a name="DataDatabricksAccountSettingV2PersonalCompute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2PersonalCompute;

DataDatabricksAccountSettingV2PersonalCompute.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

### DataDatabricksAccountSettingV2RestrictWorkspaceAdmins <a name="DataDatabricksAccountSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins;

DataDatabricksAccountSettingV2RestrictWorkspaceAdmins.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#status DataDatabricksAccountSettingV2#status}.

---

### DataDatabricksAccountSettingV2StringVal <a name="DataDatabricksAccountSettingV2StringVal" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2StringVal;

DataDatabricksAccountSettingV2StringVal.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_setting_v2#value DataDatabricksAccountSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference;

new DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```java
public java.lang.String getAccessPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference;

new DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```java
public void resetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getApprovedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;

new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```java
public void resetForcedForComplianceMode()
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```java
public void resetUnavailableForDisabledEntitlement()
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```java
public void resetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```java
public java.lang.Object getForcedForComplianceModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTierInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```java
public java.lang.Object getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;

new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```java
public void putWeekDayBasedSchedule(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```java
public void resetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```java
public java.lang.Object getWeekDayBasedScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;

new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```java
public void putWindowStartTime(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```java
public java.lang.Object getWindowStartTimeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;

new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference;

new DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```java
public void putEnablementDetails(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```java
public void resetCanToggle()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```java
public void resetEnablementDetails()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```java
public void resetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```java
public DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```java
public java.lang.Object getCanToggleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```java
public java.lang.Object getEnablementDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```java
public java.lang.Object getMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```java
public java.lang.Object getCanToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2AutomaticClusterUpdateWorkspace</a>

---


### DataDatabricksAccountSettingV2BooleanValOutputReference <a name="DataDatabricksAccountSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2BooleanValOutputReference;

new DataDatabricksAccountSettingV2BooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanValOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2BooleanVal">DataDatabricksAccountSettingV2BooleanVal</a>

---


### DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference;

new DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```java
public java.lang.String getAccessPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```java
public java.lang.String getAccessPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference;

new DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```java
public void resetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getApprovedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```java
public java.util.List<java.lang.String> getApprovedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksAccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;

new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```java
public void resetForcedForComplianceMode()
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```java
public void resetUnavailableForDisabledEntitlement()
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```java
public void resetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```java
public java.lang.Object getForcedForComplianceModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTierInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```java
public java.lang.Object getForcedForComplianceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```java
public java.lang.Object getUnavailableForDisabledEntitlement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```java
public java.lang.Object getUnavailableForNonEnterpriseTier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;

new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```java
public void putWeekDayBasedSchedule(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```java
public void resetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference getWeekDayBasedSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```java
public java.lang.Object getWeekDayBasedScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;

new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```java
public void putWindowStartTime(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```java
public void resetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```java
public java.lang.Object getWindowStartTimeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;

new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference;

new DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```java
public void putEnablementDetails(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```java
public void resetCanToggle()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```java
public void resetEnablementDetails()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```java
public void resetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference getEnablementDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```java
public DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```java
public java.lang.Object getCanToggleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```java
public java.lang.Object getEnablementDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```java
public java.lang.Object getMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```java
public java.lang.Object getCanToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```java
public java.lang.Object getRestartEvenIfNoUpdatesAvailable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksAccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference <a name="DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference;

new DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal">DataDatabricksAccountSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingV2EffectiveBooleanVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveBooleanVal">DataDatabricksAccountSettingV2EffectiveBooleanVal</a>

---


### DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference <a name="DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference;

new DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal">DataDatabricksAccountSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingV2EffectiveIntegerVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveIntegerVal">DataDatabricksAccountSettingV2EffectiveIntegerVal</a>

---


### DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference <a name="DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference;

new DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectivePersonalCompute">DataDatabricksAccountSettingV2EffectivePersonalCompute</a>

---


### DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference;

new DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksAccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### DataDatabricksAccountSettingV2EffectiveStringValOutputReference <a name="DataDatabricksAccountSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference;

new DataDatabricksAccountSettingV2EffectiveStringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal">DataDatabricksAccountSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```java
public DataDatabricksAccountSettingV2EffectiveStringVal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2EffectiveStringVal">DataDatabricksAccountSettingV2EffectiveStringVal</a>

---


### DataDatabricksAccountSettingV2IntegerValOutputReference <a name="DataDatabricksAccountSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2IntegerValOutputReference;

new DataDatabricksAccountSettingV2IntegerValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerValOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2IntegerVal">DataDatabricksAccountSettingV2IntegerVal</a>

---


### DataDatabricksAccountSettingV2PersonalComputeOutputReference <a name="DataDatabricksAccountSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2PersonalComputeOutputReference;

new DataDatabricksAccountSettingV2PersonalComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2PersonalCompute">DataDatabricksAccountSettingV2PersonalCompute</a>

---


### DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference <a name="DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference;

new DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2RestrictWorkspaceAdmins">DataDatabricksAccountSettingV2RestrictWorkspaceAdmins</a>

---


### DataDatabricksAccountSettingV2StringValOutputReference <a name="DataDatabricksAccountSettingV2StringValOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_setting_v2.DataDatabricksAccountSettingV2StringValOutputReference;

new DataDatabricksAccountSettingV2StringValOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringValOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksAccountSettingV2.DataDatabricksAccountSettingV2StringVal">DataDatabricksAccountSettingV2StringVal</a>

---



