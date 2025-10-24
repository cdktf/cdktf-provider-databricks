# `accountSettingV2` Submodule <a name="`accountSettingV2` Submodule" id="@cdktf/provider-databricks.accountSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSettingV2 <a name="AccountSettingV2" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2 databricks_account_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aibi_dashboard_embedding_access_policy: AccountSettingV2AibiDashboardEmbeddingAccessPolicy = None,
  aibi_dashboard_embedding_approved_domains: AccountSettingV2AibiDashboardEmbeddingApprovedDomains = None,
  automatic_cluster_update_workspace: AccountSettingV2AutomaticClusterUpdateWorkspace = None,
  boolean_val: AccountSettingV2BooleanVal = None,
  effective_aibi_dashboard_embedding_access_policy: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy = None,
  effective_aibi_dashboard_embedding_approved_domains: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains = None,
  effective_automatic_cluster_update_workspace: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace = None,
  effective_personal_compute: AccountSettingV2EffectivePersonalCompute = None,
  effective_restrict_workspace_admins: AccountSettingV2EffectiveRestrictWorkspaceAdmins = None,
  integer_val: AccountSettingV2IntegerVal = None,
  name: str = None,
  personal_compute: AccountSettingV2PersonalCompute = None,
  restrict_workspace_admins: AccountSettingV2RestrictWorkspaceAdmins = None,
  string_val: AccountSettingV2StringVal = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automatic_cluster_update_workspace`<sup>Optional</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}.

---

##### `boolean_val`<sup>Optional</sup> <a name="boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.booleanVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}.

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effective_automatic_cluster_update_workspace`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effective_personal_compute`<sup>Optional</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectivePersonalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}.

---

##### `effective_restrict_workspace_admins`<sup>Optional</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integer_val`<sup>Optional</sup> <a name="integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.integerVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}.

---

##### `personal_compute`<sup>Optional</sup> <a name="personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.personalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}.

---

##### `restrict_workspace_admins`<sup>Optional</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.restrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}.

---

##### `string_val`<sup>Optional</sup> <a name="string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.Initializer.parameter.stringVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy">put_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains">put_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace">put_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal">put_boolean_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">put_effective_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">put_effective_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">put_effective_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute">put_effective_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins">put_effective_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal">put_integer_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute">put_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins">put_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal">put_string_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy">reset_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains">reset_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAutomaticClusterUpdateWorkspace">reset_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetBooleanVal">reset_boolean_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">reset_effective_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">reset_effective_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">reset_effective_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectivePersonalCompute">reset_effective_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveRestrictWorkspaceAdmins">reset_effective_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetIntegerVal">reset_integer_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetPersonalCompute">reset_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetRestrictWorkspaceAdmins">reset_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetStringVal">reset_string_val</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aibi_dashboard_embedding_access_policy` <a name="put_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```python
def put_aibi_dashboard_embedding_access_policy(
  access_policy_type: str
) -> None
```

###### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.accessPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

##### `put_aibi_dashboard_embedding_approved_domains` <a name="put_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```python
def put_aibi_dashboard_embedding_approved_domains(
  approved_domains: typing.List[str] = None
) -> None
```

###### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.approvedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

##### `put_automatic_cluster_update_workspace` <a name="put_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```python
def put_automatic_cluster_update_workspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
) -> None
```

###### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.canToggle"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

###### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.enablementDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

###### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putAutomaticClusterUpdateWorkspace.parameter.restartEvenIfNoUpdatesAvailable"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

##### `put_boolean_val` <a name="put_boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal"></a>

```python
def put_boolean_val(
  value: bool | IResolvable = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

##### `put_effective_aibi_dashboard_embedding_access_policy` <a name="put_effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
def put_effective_aibi_dashboard_embedding_access_policy(
  access_policy_type: str
) -> None
```

###### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.accessPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

##### `put_effective_aibi_dashboard_embedding_approved_domains` <a name="put_effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
def put_effective_aibi_dashboard_embedding_approved_domains(
  approved_domains: typing.List[str] = None
) -> None
```

###### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.approvedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

##### `put_effective_automatic_cluster_update_workspace` <a name="put_effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```python
def put_effective_automatic_cluster_update_workspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
) -> None
```

###### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.canToggle"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

###### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.enablementDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

###### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.restartEvenIfNoUpdatesAvailable"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

##### `put_effective_personal_compute` <a name="put_effective_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute"></a>

```python
def put_effective_personal_compute(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

##### `put_effective_restrict_workspace_admins` <a name="put_effective_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```python
def put_effective_restrict_workspace_admins(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

##### `put_integer_val` <a name="put_integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal"></a>

```python
def put_integer_val(
  value: typing.Union[int, float] = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

##### `put_personal_compute` <a name="put_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute"></a>

```python
def put_personal_compute(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

##### `put_restrict_workspace_admins` <a name="put_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins"></a>

```python
def put_restrict_workspace_admins(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putRestrictWorkspaceAdmins.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

##### `put_string_val` <a name="put_string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal"></a>

```python
def put_string_val(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.putStringVal.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

##### `reset_aibi_dashboard_embedding_access_policy` <a name="reset_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```python
def reset_aibi_dashboard_embedding_access_policy() -> None
```

##### `reset_aibi_dashboard_embedding_approved_domains` <a name="reset_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```python
def reset_aibi_dashboard_embedding_approved_domains() -> None
```

##### `reset_automatic_cluster_update_workspace` <a name="reset_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```python
def reset_automatic_cluster_update_workspace() -> None
```

##### `reset_boolean_val` <a name="reset_boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetBooleanVal"></a>

```python
def reset_boolean_val() -> None
```

##### `reset_effective_aibi_dashboard_embedding_access_policy` <a name="reset_effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
def reset_effective_aibi_dashboard_embedding_access_policy() -> None
```

##### `reset_effective_aibi_dashboard_embedding_approved_domains` <a name="reset_effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
def reset_effective_aibi_dashboard_embedding_approved_domains() -> None
```

##### `reset_effective_automatic_cluster_update_workspace` <a name="reset_effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```python
def reset_effective_automatic_cluster_update_workspace() -> None
```

##### `reset_effective_personal_compute` <a name="reset_effective_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectivePersonalCompute"></a>

```python
def reset_effective_personal_compute() -> None
```

##### `reset_effective_restrict_workspace_admins` <a name="reset_effective_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```python
def reset_effective_restrict_workspace_admins() -> None
```

##### `reset_integer_val` <a name="reset_integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetIntegerVal"></a>

```python
def reset_integer_val() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_personal_compute` <a name="reset_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetPersonalCompute"></a>

```python
def reset_personal_compute() -> None
```

##### `reset_restrict_workspace_admins` <a name="reset_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetRestrictWorkspaceAdmins"></a>

```python
def reset_restrict_workspace_admins() -> None
```

##### `reset_string_val` <a name="reset_string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.resetStringVal"></a>

```python
def reset_string_val() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountSettingV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountSettingV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference">AccountSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveBooleanVal">effective_boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference">AccountSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveIntegerVal">effective_integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference">AccountSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference">AccountSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveStringVal">effective_string_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference">AccountSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference">AccountSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference">AccountSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference">AccountSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference">AccountSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">aibi_dashboard_embedding_access_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">aibi_dashboard_embedding_approved_domains_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspaceInput">automatic_cluster_update_workspace_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanValInput">boolean_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">effective_aibi_dashboard_embedding_access_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">effective_aibi_dashboard_embedding_approved_domains_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">effective_automatic_cluster_update_workspace_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalComputeInput">effective_personal_compute_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput">effective_restrict_workspace_admins_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerValInput">integer_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalComputeInput">personal_compute_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdminsInput">restrict_workspace_admins_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringValInput">string_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Required</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```python
aibi_dashboard_embedding_access_policy: AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `automatic_cluster_update_workspace`<sup>Required</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspace"></a>

```python
automatic_cluster_update_workspace: AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `boolean_val`<sup>Required</sup> <a name="boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanVal"></a>

```python
boolean_val: AccountSettingV2BooleanValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference">AccountSettingV2BooleanValOutputReference</a>

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Required</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
effective_aibi_dashboard_embedding_access_policy: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
effective_aibi_dashboard_embedding_approved_domains: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `effective_automatic_cluster_update_workspace`<sup>Required</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```python
effective_automatic_cluster_update_workspace: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `effective_boolean_val`<sup>Required</sup> <a name="effective_boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveBooleanVal"></a>

```python
effective_boolean_val: AccountSettingV2EffectiveBooleanValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference">AccountSettingV2EffectiveBooleanValOutputReference</a>

---

##### `effective_integer_val`<sup>Required</sup> <a name="effective_integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveIntegerVal"></a>

```python
effective_integer_val: AccountSettingV2EffectiveIntegerValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference">AccountSettingV2EffectiveIntegerValOutputReference</a>

---

##### `effective_personal_compute`<sup>Required</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalCompute"></a>

```python
effective_personal_compute: AccountSettingV2EffectivePersonalComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference">AccountSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `effective_restrict_workspace_admins`<sup>Required</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```python
effective_restrict_workspace_admins: AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `effective_string_val`<sup>Required</sup> <a name="effective_string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveStringVal"></a>

```python
effective_string_val: AccountSettingV2EffectiveStringValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference">AccountSettingV2EffectiveStringValOutputReference</a>

---

##### `integer_val`<sup>Required</sup> <a name="integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerVal"></a>

```python
integer_val: AccountSettingV2IntegerValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference">AccountSettingV2IntegerValOutputReference</a>

---

##### `personal_compute`<sup>Required</sup> <a name="personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalCompute"></a>

```python
personal_compute: AccountSettingV2PersonalComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference">AccountSettingV2PersonalComputeOutputReference</a>

---

##### `restrict_workspace_admins`<sup>Required</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: AccountSettingV2RestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference">AccountSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `string_val`<sup>Required</sup> <a name="string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringVal"></a>

```python
string_val: AccountSettingV2StringValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference">AccountSettingV2StringValOutputReference</a>

---

##### `aibi_dashboard_embedding_access_policy_input`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```python
aibi_dashboard_embedding_access_policy_input: IResolvable | AccountSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `aibi_dashboard_embedding_approved_domains_input`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```python
aibi_dashboard_embedding_approved_domains_input: IResolvable | AccountSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `automatic_cluster_update_workspace_input`<sup>Optional</sup> <a name="automatic_cluster_update_workspace_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```python
automatic_cluster_update_workspace_input: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `boolean_val_input`<sup>Optional</sup> <a name="boolean_val_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.booleanValInput"></a>

```python
boolean_val_input: IResolvable | AccountSettingV2BooleanVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

---

##### `effective_aibi_dashboard_embedding_access_policy_input`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```python
effective_aibi_dashboard_embedding_access_policy_input: IResolvable | AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `effective_aibi_dashboard_embedding_approved_domains_input`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```python
effective_aibi_dashboard_embedding_approved_domains_input: IResolvable | AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `effective_automatic_cluster_update_workspace_input`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```python
effective_automatic_cluster_update_workspace_input: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `effective_personal_compute_input`<sup>Optional</sup> <a name="effective_personal_compute_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectivePersonalComputeInput"></a>

```python
effective_personal_compute_input: IResolvable | AccountSettingV2EffectivePersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

---

##### `effective_restrict_workspace_admins_input`<sup>Optional</sup> <a name="effective_restrict_workspace_admins_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```python
effective_restrict_workspace_admins_input: IResolvable | AccountSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `integer_val_input`<sup>Optional</sup> <a name="integer_val_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.integerValInput"></a>

```python
integer_val_input: IResolvable | AccountSettingV2IntegerVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `personal_compute_input`<sup>Optional</sup> <a name="personal_compute_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.personalComputeInput"></a>

```python
personal_compute_input: IResolvable | AccountSettingV2PersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

---

##### `restrict_workspace_admins_input`<sup>Optional</sup> <a name="restrict_workspace_admins_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.restrictWorkspaceAdminsInput"></a>

```python
restrict_workspace_admins_input: IResolvable | AccountSettingV2RestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

---

##### `string_val_input`<sup>Optional</sup> <a name="string_val_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.stringValInput"></a>

```python
string_val_input: IResolvable | AccountSettingV2StringVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSettingV2AibiDashboardEmbeddingAccessPolicy <a name="AccountSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy(
  access_policy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}. |

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

### AccountSettingV2AibiDashboardEmbeddingApprovedDomains <a name="AccountSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains(
  approved_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}. |

---

##### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspace <a name="AccountSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

##### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```python
enablement_details: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```python
maintenance_window: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

##### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow(
  week_day_based_schedule: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}. |

---

##### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```python
window_start_time: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

### AccountSettingV2BooleanVal <a name="AccountSettingV2BooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2BooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2Config <a name="AccountSettingV2Config" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aibi_dashboard_embedding_access_policy: AccountSettingV2AibiDashboardEmbeddingAccessPolicy = None,
  aibi_dashboard_embedding_approved_domains: AccountSettingV2AibiDashboardEmbeddingApprovedDomains = None,
  automatic_cluster_update_workspace: AccountSettingV2AutomaticClusterUpdateWorkspace = None,
  boolean_val: AccountSettingV2BooleanVal = None,
  effective_aibi_dashboard_embedding_access_policy: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy = None,
  effective_aibi_dashboard_embedding_approved_domains: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains = None,
  effective_automatic_cluster_update_workspace: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace = None,
  effective_personal_compute: AccountSettingV2EffectivePersonalCompute = None,
  effective_restrict_workspace_admins: AccountSettingV2EffectiveRestrictWorkspaceAdmins = None,
  integer_val: AccountSettingV2IntegerVal = None,
  name: str = None,
  personal_compute: AccountSettingV2PersonalCompute = None,
  restrict_workspace_admins: AccountSettingV2RestrictWorkspaceAdmins = None,
  string_val: AccountSettingV2StringVal = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```python
aibi_dashboard_embedding_access_policy: AccountSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_access_policy AccountSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: AccountSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#aibi_dashboard_embedding_approved_domains AccountSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automatic_cluster_update_workspace`<sup>Optional</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```python
automatic_cluster_update_workspace: AccountSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#automatic_cluster_update_workspace AccountSettingV2#automatic_cluster_update_workspace}.

---

##### `boolean_val`<sup>Optional</sup> <a name="boolean_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.booleanVal"></a>

```python
boolean_val: AccountSettingV2BooleanVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#boolean_val AccountSettingV2#boolean_val}.

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
effective_aibi_dashboard_embedding_access_policy: AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_access_policy AccountSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
effective_aibi_dashboard_embedding_approved_domains: AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_aibi_dashboard_embedding_approved_domains AccountSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effective_automatic_cluster_update_workspace`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```python
effective_automatic_cluster_update_workspace: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_automatic_cluster_update_workspace AccountSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effective_personal_compute`<sup>Optional</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectivePersonalCompute"></a>

```python
effective_personal_compute: AccountSettingV2EffectivePersonalCompute
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_personal_compute AccountSettingV2#effective_personal_compute}.

---

##### `effective_restrict_workspace_admins`<sup>Optional</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```python
effective_restrict_workspace_admins: AccountSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#effective_restrict_workspace_admins AccountSettingV2#effective_restrict_workspace_admins}.

---

##### `integer_val`<sup>Optional</sup> <a name="integer_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.integerVal"></a>

```python
integer_val: AccountSettingV2IntegerVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#integer_val AccountSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#name AccountSettingV2#name}.

---

##### `personal_compute`<sup>Optional</sup> <a name="personal_compute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.personalCompute"></a>

```python
personal_compute: AccountSettingV2PersonalCompute
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#personal_compute AccountSettingV2#personal_compute}.

---

##### `restrict_workspace_admins`<sup>Optional</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: AccountSettingV2RestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restrict_workspace_admins AccountSettingV2#restrict_workspace_admins}.

---

##### `string_val`<sup>Optional</sup> <a name="string_val" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2Config.property.stringVal"></a>

```python
string_val: AccountSettingV2StringVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#string_val AccountSettingV2#string_val}.

---

### AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy(
  access_policy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}. |

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#access_policy_type AccountSettingV2#access_policy_type}.

---

### AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains(
  approved_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}. |

---

##### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#approved_domains AccountSettingV2#approved_domains}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}. |

---

##### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#can_toggle AccountSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enabled AccountSettingV2#enabled}.

---

##### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```python
enablement_details: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#enablement_details AccountSettingV2#enablement_details}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```python
maintenance_window: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#maintenance_window AccountSettingV2#maintenance_window}.

---

##### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#restart_even_if_no_updates_available AccountSettingV2#restart_even_if_no_updates_available}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

##### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow(
  week_day_based_schedule: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}. |

---

##### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```python
window_start_time: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

### AccountSettingV2EffectiveBooleanVal <a name="AccountSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveBooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectiveIntegerVal <a name="AccountSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveIntegerVal(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectivePersonalCompute <a name="AccountSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectivePersonalCompute(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2EffectiveRestrictWorkspaceAdmins <a name="AccountSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

### AccountSettingV2EffectiveStringVal <a name="AccountSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveStringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2IntegerVal <a name="AccountSettingV2IntegerVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2IntegerVal(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2PersonalCompute <a name="AccountSettingV2PersonalCompute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2PersonalCompute(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

### AccountSettingV2RestrictWorkspaceAdmins <a name="AccountSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#status AccountSettingV2#status}.

---

### AccountSettingV2StringVal <a name="AccountSettingV2StringVal" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2StringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#value AccountSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">access_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy_type_input`<sup>Optional</sup> <a name="access_policy_type_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```python
access_policy_type_input: str
```

- *Type:* str

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingAccessPolicy">AccountSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">reset_approved_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approved_domains` <a name="reset_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```python
def reset_approved_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approved_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approved_domains_input`<sup>Optional</sup> <a name="approved_domains_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```python
approved_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AibiDashboardEmbeddingApprovedDomains">AccountSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">reset_forced_for_compliance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">reset_unavailable_for_disabled_entitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">reset_unavailable_for_non_enterprise_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forced_for_compliance_mode` <a name="reset_forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```python
def reset_forced_for_compliance_mode() -> None
```

##### `reset_unavailable_for_disabled_entitlement` <a name="reset_unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```python
def reset_unavailable_for_disabled_entitlement() -> None
```

##### `reset_unavailable_for_non_enterprise_tier` <a name="reset_unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```python
def reset_unavailable_for_non_enterprise_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forced_for_compliance_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailable_for_disabled_entitlement_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailable_for_non_enterprise_tier_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forced_for_compliance_mode_input`<sup>Optional</sup> <a name="forced_for_compliance_mode_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```python
forced_for_compliance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement_input`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```python
unavailable_for_disabled_entitlement_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier_input`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```python
unavailable_for_non_enterprise_tier_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `forced_for_compliance_mode`<sup>Required</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement`<sup>Required</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier`<sup>Required</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">put_week_day_based_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">reset_week_day_based_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_week_day_based_schedule` <a name="put_week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```python
def put_week_day_based_schedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.windowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

##### `reset_week_day_based_schedule` <a name="reset_week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```python
def reset_week_day_based_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">week_day_based_schedule_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `week_day_based_schedule`<sup>Required</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `week_day_based_schedule_input`<sup>Optional</sup> <a name="week_day_based_schedule_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```python
week_day_based_schedule_input: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">put_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window_start_time` <a name="put_window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```python
def put_window_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_window_start_time` <a name="reset_window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```python
window_start_time: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">put_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">reset_can_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">reset_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">reset_restart_even_if_no_updates_available</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enablement_details` <a name="put_enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```python
def put_enablement_details(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
) -> None
```

###### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.forcedForComplianceMode"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

###### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForDisabledEntitlement"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

###### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForNonEnterpriseTier"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  week_day_based_schedule: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
) -> None
```

###### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.weekDayBasedSchedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

##### `reset_can_toggle` <a name="reset_can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```python
def reset_can_toggle() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enablement_details` <a name="reset_enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```python
def reset_enablement_details() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_restart_even_if_no_updates_available` <a name="reset_restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```python
def reset_restart_even_if_no_updates_available() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">can_toggle_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablement_details_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restart_even_if_no_updates_available_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enablement_details`<sup>Required</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```python
enablement_details: AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `can_toggle_input`<sup>Optional</sup> <a name="can_toggle_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```python
can_toggle_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enablement_details_input`<sup>Optional</sup> <a name="enablement_details_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```python
enablement_details_input: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restart_even_if_no_updates_available_input`<sup>Optional</sup> <a name="restart_even_if_no_updates_available_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```python
restart_even_if_no_updates_available_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `can_toggle`<sup>Required</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `restart_even_if_no_updates_available`<sup>Required</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2AutomaticClusterUpdateWorkspace">AccountSettingV2AutomaticClusterUpdateWorkspace</a>

---


### AccountSettingV2BooleanValOutputReference <a name="AccountSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2BooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2BooleanVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2BooleanVal">AccountSettingV2BooleanVal</a>

---


### AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">access_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy_type_input`<sup>Optional</sup> <a name="access_policy_type_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```python
access_policy_type_input: str
```

- *Type:* str

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">AccountSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">reset_approved_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approved_domains` <a name="reset_approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```python
def reset_approved_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approved_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approved_domains_input`<sup>Optional</sup> <a name="approved_domains_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```python
approved_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">AccountSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">reset_forced_for_compliance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">reset_unavailable_for_disabled_entitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">reset_unavailable_for_non_enterprise_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forced_for_compliance_mode` <a name="reset_forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```python
def reset_forced_for_compliance_mode() -> None
```

##### `reset_unavailable_for_disabled_entitlement` <a name="reset_unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```python
def reset_unavailable_for_disabled_entitlement() -> None
```

##### `reset_unavailable_for_non_enterprise_tier` <a name="reset_unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```python
def reset_unavailable_for_non_enterprise_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forced_for_compliance_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailable_for_disabled_entitlement_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailable_for_non_enterprise_tier_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forced_for_compliance_mode_input`<sup>Optional</sup> <a name="forced_for_compliance_mode_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```python
forced_for_compliance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement_input`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```python
unavailable_for_disabled_entitlement_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier_input`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```python
unavailable_for_non_enterprise_tier_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `forced_for_compliance_mode`<sup>Required</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement`<sup>Required</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier`<sup>Required</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">put_week_day_based_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">reset_week_day_based_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_week_day_based_schedule` <a name="put_week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```python
def put_week_day_based_schedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#day_of_week AccountSettingV2#day_of_week}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#frequency AccountSettingV2#frequency}.

---

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.windowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#window_start_time AccountSettingV2#window_start_time}.

---

##### `reset_week_day_based_schedule` <a name="reset_week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```python
def reset_week_day_based_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">week_day_based_schedule_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `week_day_based_schedule`<sup>Required</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `week_day_based_schedule_input`<sup>Optional</sup> <a name="week_day_based_schedule_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```python
week_day_based_schedule_input: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">put_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window_start_time` <a name="put_window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```python
def put_window_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#hours AccountSettingV2#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#minutes AccountSettingV2#minutes}.

---

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_window_start_time` <a name="reset_window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```python
window_start_time: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">put_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">reset_can_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">reset_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">reset_restart_even_if_no_updates_available</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enablement_details` <a name="put_enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```python
def put_enablement_details(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
) -> None
```

###### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.forcedForComplianceMode"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#forced_for_compliance_mode AccountSettingV2#forced_for_compliance_mode}.

---

###### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForDisabledEntitlement"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_disabled_entitlement AccountSettingV2#unavailable_for_disabled_entitlement}.

---

###### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForNonEnterpriseTier"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#unavailable_for_non_enterprise_tier AccountSettingV2#unavailable_for_non_enterprise_tier}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  week_day_based_schedule: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
) -> None
```

###### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.weekDayBasedSchedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_setting_v2#week_day_based_schedule AccountSettingV2#week_day_based_schedule}.

---

##### `reset_can_toggle` <a name="reset_can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```python
def reset_can_toggle() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enablement_details` <a name="reset_enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```python
def reset_enablement_details() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_restart_even_if_no_updates_available` <a name="reset_restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```python
def reset_restart_even_if_no_updates_available() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">can_toggle_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablement_details_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restart_even_if_no_updates_available_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enablement_details`<sup>Required</sup> <a name="enablement_details" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```python
enablement_details: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `can_toggle_input`<sup>Optional</sup> <a name="can_toggle_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```python
can_toggle_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enablement_details_input`<sup>Optional</sup> <a name="enablement_details_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```python
enablement_details_input: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restart_even_if_no_updates_available_input`<sup>Optional</sup> <a name="restart_even_if_no_updates_available_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```python
restart_even_if_no_updates_available_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `can_toggle`<sup>Required</sup> <a name="can_toggle" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `restart_even_if_no_updates_available`<sup>Required</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace">AccountSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### AccountSettingV2EffectiveBooleanValOutputReference <a name="AccountSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal">AccountSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```python
internal_value: AccountSettingV2EffectiveBooleanVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveBooleanVal">AccountSettingV2EffectiveBooleanVal</a>

---


### AccountSettingV2EffectiveIntegerValOutputReference <a name="AccountSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal">AccountSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```python
internal_value: AccountSettingV2EffectiveIntegerVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveIntegerVal">AccountSettingV2EffectiveIntegerVal</a>

---


### AccountSettingV2EffectivePersonalComputeOutputReference <a name="AccountSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectivePersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectivePersonalCompute">AccountSettingV2EffectivePersonalCompute</a>

---


### AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveRestrictWorkspaceAdmins">AccountSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### AccountSettingV2EffectiveStringValOutputReference <a name="AccountSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2EffectiveStringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal">AccountSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```python
internal_value: AccountSettingV2EffectiveStringVal
```

- *Type:* <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2EffectiveStringVal">AccountSettingV2EffectiveStringVal</a>

---


### AccountSettingV2IntegerValOutputReference <a name="AccountSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2IntegerValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2IntegerVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2IntegerVal">AccountSettingV2IntegerVal</a>

---


### AccountSettingV2PersonalComputeOutputReference <a name="AccountSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2PersonalComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2PersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2PersonalCompute">AccountSettingV2PersonalCompute</a>

---


### AccountSettingV2RestrictWorkspaceAdminsOutputReference <a name="AccountSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2RestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2RestrictWorkspaceAdmins">AccountSettingV2RestrictWorkspaceAdmins</a>

---


### AccountSettingV2StringValOutputReference <a name="AccountSettingV2StringValOutputReference" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import account_setting_v2

accountSettingV2.AccountSettingV2StringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountSettingV2StringVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountSettingV2.AccountSettingV2StringVal">AccountSettingV2StringVal</a>

---



