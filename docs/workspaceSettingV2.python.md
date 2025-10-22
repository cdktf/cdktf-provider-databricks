# `workspaceSettingV2` Submodule <a name="`workspaceSettingV2` Submodule" id="@cdktf/provider-databricks.workspaceSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettingV2 <a name="WorkspaceSettingV2" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2 databricks_workspace_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aibi_dashboard_embedding_access_policy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy = None,
  aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains = None,
  automatic_cluster_update_workspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspace = None,
  boolean_val: WorkspaceSettingV2BooleanVal = None,
  effective_aibi_dashboard_embedding_access_policy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy = None,
  effective_aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains = None,
  effective_automatic_cluster_update_workspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace = None,
  effective_personal_compute: WorkspaceSettingV2EffectivePersonalCompute = None,
  effective_restrict_workspace_admins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins = None,
  integer_val: WorkspaceSettingV2IntegerVal = None,
  name: str = None,
  personal_compute: WorkspaceSettingV2PersonalCompute = None,
  restrict_workspace_admins: WorkspaceSettingV2RestrictWorkspaceAdmins = None,
  string_val: WorkspaceSettingV2StringVal = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.aibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automatic_cluster_update_workspace`<sup>Optional</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.automaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}.

---

##### `boolean_val`<sup>Optional</sup> <a name="boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.booleanVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}.

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effective_automatic_cluster_update_workspace`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveAutomaticClusterUpdateWorkspace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effective_personal_compute`<sup>Optional</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectivePersonalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}.

---

##### `effective_restrict_workspace_admins`<sup>Optional</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.effectiveRestrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}.

---

##### `integer_val`<sup>Optional</sup> <a name="integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.integerVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}.

---

##### `personal_compute`<sup>Optional</sup> <a name="personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.personalCompute"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}.

---

##### `restrict_workspace_admins`<sup>Optional</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.restrictWorkspaceAdmins"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}.

---

##### `string_val`<sup>Optional</sup> <a name="string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.stringVal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy">put_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains">put_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace">put_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal">put_boolean_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">put_effective_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">put_effective_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">put_effective_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute">put_effective_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins">put_effective_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal">put_integer_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute">put_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins">put_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal">put_string_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy">reset_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains">reset_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace">reset_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal">reset_boolean_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">reset_effective_aibi_dashboard_embedding_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">reset_effective_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">reset_effective_automatic_cluster_update_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute">reset_effective_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins">reset_effective_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal">reset_integer_val</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute">reset_personal_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins">reset_restrict_workspace_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal">reset_string_val</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aibi_dashboard_embedding_access_policy` <a name="put_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```python
def put_aibi_dashboard_embedding_access_policy(
  access_policy_type: str
) -> None
```

###### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.accessPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

##### `put_aibi_dashboard_embedding_approved_domains` <a name="put_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```python
def put_aibi_dashboard_embedding_approved_domains(
  approved_domains: typing.List[str] = None
) -> None
```

###### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.approvedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

##### `put_automatic_cluster_update_workspace` <a name="put_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```python
def put_automatic_cluster_update_workspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
) -> None
```

###### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.canToggle"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

###### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.enablementDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

###### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.restartEvenIfNoUpdatesAvailable"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

##### `put_boolean_val` <a name="put_boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal"></a>

```python
def put_boolean_val(
  value: bool | IResolvable = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

##### `put_effective_aibi_dashboard_embedding_access_policy` <a name="put_effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
def put_effective_aibi_dashboard_embedding_access_policy(
  access_policy_type: str
) -> None
```

###### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.accessPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

##### `put_effective_aibi_dashboard_embedding_approved_domains` <a name="put_effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
def put_effective_aibi_dashboard_embedding_approved_domains(
  approved_domains: typing.List[str] = None
) -> None
```

###### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.approvedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

##### `put_effective_automatic_cluster_update_workspace` <a name="put_effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```python
def put_effective_automatic_cluster_update_workspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
) -> None
```

###### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.canToggle"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

###### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.enablementDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

###### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.restartEvenIfNoUpdatesAvailable"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

##### `put_effective_personal_compute` <a name="put_effective_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute"></a>

```python
def put_effective_personal_compute(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

##### `put_effective_restrict_workspace_admins` <a name="put_effective_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```python
def put_effective_restrict_workspace_admins(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

##### `put_integer_val` <a name="put_integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal"></a>

```python
def put_integer_val(
  value: typing.Union[int, float] = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

##### `put_personal_compute` <a name="put_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute"></a>

```python
def put_personal_compute(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

##### `put_restrict_workspace_admins` <a name="put_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins"></a>

```python
def put_restrict_workspace_admins(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

##### `put_string_val` <a name="put_string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal"></a>

```python
def put_string_val(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

##### `reset_aibi_dashboard_embedding_access_policy` <a name="reset_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```python
def reset_aibi_dashboard_embedding_access_policy() -> None
```

##### `reset_aibi_dashboard_embedding_approved_domains` <a name="reset_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```python
def reset_aibi_dashboard_embedding_approved_domains() -> None
```

##### `reset_automatic_cluster_update_workspace` <a name="reset_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```python
def reset_automatic_cluster_update_workspace() -> None
```

##### `reset_boolean_val` <a name="reset_boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal"></a>

```python
def reset_boolean_val() -> None
```

##### `reset_effective_aibi_dashboard_embedding_access_policy` <a name="reset_effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
def reset_effective_aibi_dashboard_embedding_access_policy() -> None
```

##### `reset_effective_aibi_dashboard_embedding_approved_domains` <a name="reset_effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
def reset_effective_aibi_dashboard_embedding_approved_domains() -> None
```

##### `reset_effective_automatic_cluster_update_workspace` <a name="reset_effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```python
def reset_effective_automatic_cluster_update_workspace() -> None
```

##### `reset_effective_personal_compute` <a name="reset_effective_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute"></a>

```python
def reset_effective_personal_compute() -> None
```

##### `reset_effective_restrict_workspace_admins` <a name="reset_effective_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```python
def reset_effective_restrict_workspace_admins() -> None
```

##### `reset_integer_val` <a name="reset_integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal"></a>

```python
def reset_integer_val() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_personal_compute` <a name="reset_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute"></a>

```python
def reset_personal_compute() -> None
```

##### `reset_restrict_workspace_admins` <a name="reset_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins"></a>

```python
def reset_restrict_workspace_admins() -> None
```

##### `reset_string_val` <a name="reset_string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal"></a>

```python
def reset_string_val() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceSettingV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal">effective_boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal">effective_integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal">effective_string_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">aibi_dashboard_embedding_access_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">aibi_dashboard_embedding_approved_domains_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput">automatic_cluster_update_workspace_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput">boolean_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">effective_aibi_dashboard_embedding_access_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">effective_aibi_dashboard_embedding_approved_domains_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">effective_automatic_cluster_update_workspace_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput">effective_personal_compute_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput">effective_restrict_workspace_admins_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput">integer_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput">personal_compute_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput">restrict_workspace_admins_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput">string_val_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Required</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```python
aibi_dashboard_embedding_access_policy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `automatic_cluster_update_workspace`<sup>Required</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace"></a>

```python
automatic_cluster_update_workspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `boolean_val`<sup>Required</sup> <a name="boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal"></a>

```python
boolean_val: WorkspaceSettingV2BooleanValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a>

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Required</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
effective_aibi_dashboard_embedding_access_policy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
effective_aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `effective_automatic_cluster_update_workspace`<sup>Required</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```python
effective_automatic_cluster_update_workspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `effective_boolean_val`<sup>Required</sup> <a name="effective_boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal"></a>

```python
effective_boolean_val: WorkspaceSettingV2EffectiveBooleanValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a>

---

##### `effective_integer_val`<sup>Required</sup> <a name="effective_integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal"></a>

```python
effective_integer_val: WorkspaceSettingV2EffectiveIntegerValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a>

---

##### `effective_personal_compute`<sup>Required</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute"></a>

```python
effective_personal_compute: WorkspaceSettingV2EffectivePersonalComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `effective_restrict_workspace_admins`<sup>Required</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```python
effective_restrict_workspace_admins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `effective_string_val`<sup>Required</sup> <a name="effective_string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal"></a>

```python
effective_string_val: WorkspaceSettingV2EffectiveStringValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a>

---

##### `integer_val`<sup>Required</sup> <a name="integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal"></a>

```python
integer_val: WorkspaceSettingV2IntegerValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a>

---

##### `personal_compute`<sup>Required</sup> <a name="personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute"></a>

```python
personal_compute: WorkspaceSettingV2PersonalComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a>

---

##### `restrict_workspace_admins`<sup>Required</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `string_val`<sup>Required</sup> <a name="string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal"></a>

```python
string_val: WorkspaceSettingV2StringValOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a>

---

##### `aibi_dashboard_embedding_access_policy_input`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```python
aibi_dashboard_embedding_access_policy_input: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `aibi_dashboard_embedding_approved_domains_input`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```python
aibi_dashboard_embedding_approved_domains_input: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `automatic_cluster_update_workspace_input`<sup>Optional</sup> <a name="automatic_cluster_update_workspace_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```python
automatic_cluster_update_workspace_input: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `boolean_val_input`<sup>Optional</sup> <a name="boolean_val_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput"></a>

```python
boolean_val_input: IResolvable | WorkspaceSettingV2BooleanVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---

##### `effective_aibi_dashboard_embedding_access_policy_input`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```python
effective_aibi_dashboard_embedding_access_policy_input: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `effective_aibi_dashboard_embedding_approved_domains_input`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```python
effective_aibi_dashboard_embedding_approved_domains_input: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `effective_automatic_cluster_update_workspace_input`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```python
effective_automatic_cluster_update_workspace_input: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `effective_personal_compute_input`<sup>Optional</sup> <a name="effective_personal_compute_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput"></a>

```python
effective_personal_compute_input: IResolvable | WorkspaceSettingV2EffectivePersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `effective_restrict_workspace_admins_input`<sup>Optional</sup> <a name="effective_restrict_workspace_admins_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```python
effective_restrict_workspace_admins_input: IResolvable | WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `integer_val_input`<sup>Optional</sup> <a name="integer_val_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput"></a>

```python
integer_val_input: IResolvable | WorkspaceSettingV2IntegerVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `personal_compute_input`<sup>Optional</sup> <a name="personal_compute_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput"></a>

```python
personal_compute_input: IResolvable | WorkspaceSettingV2PersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---

##### `restrict_workspace_admins_input`<sup>Optional</sup> <a name="restrict_workspace_admins_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput"></a>

```python
restrict_workspace_admins_input: IResolvable | WorkspaceSettingV2RestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `string_val_input`<sup>Optional</sup> <a name="string_val_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput"></a>

```python
string_val_input: IResolvable | WorkspaceSettingV2StringVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy(
  access_policy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains(
  approved_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```python
enablement_details: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow(
  week_day_based_schedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```python
window_start_time: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2BooleanVal <a name="WorkspaceSettingV2BooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2BooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2Config <a name="WorkspaceSettingV2Config" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aibi_dashboard_embedding_access_policy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy = None,
  aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains = None,
  automatic_cluster_update_workspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspace = None,
  boolean_val: WorkspaceSettingV2BooleanVal = None,
  effective_aibi_dashboard_embedding_access_policy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy = None,
  effective_aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains = None,
  effective_automatic_cluster_update_workspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace = None,
  effective_personal_compute: WorkspaceSettingV2EffectivePersonalCompute = None,
  effective_restrict_workspace_admins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins = None,
  integer_val: WorkspaceSettingV2IntegerVal = None,
  name: str = None,
  personal_compute: WorkspaceSettingV2PersonalCompute = None,
  restrict_workspace_admins: WorkspaceSettingV2RestrictWorkspaceAdmins = None,
  string_val: WorkspaceSettingV2StringVal = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace">automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal">boolean_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">effective_aibi_dashboard_embedding_access_policy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">effective_aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">effective_automatic_cluster_update_workspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute">effective_personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins">effective_restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal">integer_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute">personal_compute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins">restrict_workspace_admins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal">string_val</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```python
aibi_dashboard_embedding_access_policy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automatic_cluster_update_workspace`<sup>Optional</sup> <a name="automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```python
automatic_cluster_update_workspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}.

---

##### `boolean_val`<sup>Optional</sup> <a name="boolean_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal"></a>

```python
boolean_val: WorkspaceSettingV2BooleanVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}.

---

##### `effective_aibi_dashboard_embedding_access_policy`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_access_policy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```python
effective_aibi_dashboard_embedding_access_policy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effective_aibi_dashboard_embedding_approved_domains`<sup>Optional</sup> <a name="effective_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```python
effective_aibi_dashboard_embedding_approved_domains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effective_automatic_cluster_update_workspace`<sup>Optional</sup> <a name="effective_automatic_cluster_update_workspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```python
effective_automatic_cluster_update_workspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effective_personal_compute`<sup>Optional</sup> <a name="effective_personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute"></a>

```python
effective_personal_compute: WorkspaceSettingV2EffectivePersonalCompute
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}.

---

##### `effective_restrict_workspace_admins`<sup>Optional</sup> <a name="effective_restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```python
effective_restrict_workspace_admins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}.

---

##### `integer_val`<sup>Optional</sup> <a name="integer_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal"></a>

```python
integer_val: WorkspaceSettingV2IntegerVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}.

---

##### `personal_compute`<sup>Optional</sup> <a name="personal_compute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute"></a>

```python
personal_compute: WorkspaceSettingV2PersonalCompute
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}.

---

##### `restrict_workspace_admins`<sup>Optional</sup> <a name="restrict_workspace_admins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins"></a>

```python
restrict_workspace_admins: WorkspaceSettingV2RestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}.

---

##### `string_val`<sup>Optional</sup> <a name="string_val" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal"></a>

```python
string_val: WorkspaceSettingV2StringVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy(
  access_policy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains(
  approved_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `approved_domains`<sup>Optional</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace(
  can_toggle: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  enablement_details: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails = None,
  maintenance_window: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow = None,
  restart_even_if_no_updates_available: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `can_toggle`<sup>Optional</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `enablement_details`<sup>Optional</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```python
enablement_details: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `restart_even_if_no_updates_available`<sup>Optional</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow(
  week_day_based_schedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```python
window_start_time: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2EffectiveBooleanVal <a name="WorkspaceSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveIntegerVal <a name="WorkspaceSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectivePersonalCompute <a name="WorkspaceSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2EffectiveStringVal <a name="WorkspaceSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2IntegerVal <a name="WorkspaceSettingV2IntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2IntegerVal(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2PersonalCompute <a name="WorkspaceSettingV2PersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2PersonalCompute(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2RestrictWorkspaceAdmins <a name="WorkspaceSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2StringVal <a name="WorkspaceSettingV2StringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2StringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">access_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy_type_input`<sup>Optional</sup> <a name="access_policy_type_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```python
access_policy_type_input: str
```

- *Type:* str

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">reset_approved_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approved_domains` <a name="reset_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```python
def reset_approved_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approved_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approved_domains_input`<sup>Optional</sup> <a name="approved_domains_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```python
approved_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">reset_forced_for_compliance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">reset_unavailable_for_disabled_entitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">reset_unavailable_for_non_enterprise_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forced_for_compliance_mode` <a name="reset_forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```python
def reset_forced_for_compliance_mode() -> None
```

##### `reset_unavailable_for_disabled_entitlement` <a name="reset_unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```python
def reset_unavailable_for_disabled_entitlement() -> None
```

##### `reset_unavailable_for_non_enterprise_tier` <a name="reset_unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```python
def reset_unavailable_for_non_enterprise_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forced_for_compliance_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailable_for_disabled_entitlement_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailable_for_non_enterprise_tier_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forced_for_compliance_mode_input`<sup>Optional</sup> <a name="forced_for_compliance_mode_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```python
forced_for_compliance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement_input`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```python
unavailable_for_disabled_entitlement_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier_input`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```python
unavailable_for_non_enterprise_tier_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `forced_for_compliance_mode`<sup>Required</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement`<sup>Required</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier`<sup>Required</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">put_week_day_based_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">reset_week_day_based_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_week_day_based_schedule` <a name="put_week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```python
def put_week_day_based_schedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.windowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

##### `reset_week_day_based_schedule` <a name="reset_week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```python
def reset_week_day_based_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">week_day_based_schedule_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `week_day_based_schedule`<sup>Required</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `week_day_based_schedule_input`<sup>Optional</sup> <a name="week_day_based_schedule_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```python
week_day_based_schedule_input: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">put_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window_start_time` <a name="put_window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```python
def put_window_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_window_start_time` <a name="reset_window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```python
window_start_time: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">put_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">reset_can_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">reset_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">reset_restart_even_if_no_updates_available</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enablement_details` <a name="put_enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```python
def put_enablement_details(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
) -> None
```

###### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.forcedForComplianceMode"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

###### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForDisabledEntitlement"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

###### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForNonEnterpriseTier"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  week_day_based_schedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
) -> None
```

###### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.weekDayBasedSchedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

##### `reset_can_toggle` <a name="reset_can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```python
def reset_can_toggle() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enablement_details` <a name="reset_enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```python
def reset_enablement_details() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_restart_even_if_no_updates_available` <a name="reset_restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```python
def reset_restart_even_if_no_updates_available() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">can_toggle_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablement_details_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restart_even_if_no_updates_available_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enablement_details`<sup>Required</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```python
enablement_details: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `can_toggle_input`<sup>Optional</sup> <a name="can_toggle_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```python
can_toggle_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enablement_details_input`<sup>Optional</sup> <a name="enablement_details_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```python
enablement_details_input: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restart_even_if_no_updates_available_input`<sup>Optional</sup> <a name="restart_even_if_no_updates_available_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```python
restart_even_if_no_updates_available_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `can_toggle`<sup>Required</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `restart_even_if_no_updates_available`<sup>Required</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2BooleanValOutputReference <a name="WorkspaceSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2BooleanVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">access_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">access_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy_type_input`<sup>Optional</sup> <a name="access_policy_type_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```python
access_policy_type_input: str
```

- *Type:* str

---

##### `access_policy_type`<sup>Required</sup> <a name="access_policy_type" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```python
access_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">reset_approved_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approved_domains` <a name="reset_approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```python
def reset_approved_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approved_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approved_domains_input`<sup>Optional</sup> <a name="approved_domains_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```python
approved_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">reset_forced_for_compliance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">reset_unavailable_for_disabled_entitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">reset_unavailable_for_non_enterprise_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forced_for_compliance_mode` <a name="reset_forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```python
def reset_forced_for_compliance_mode() -> None
```

##### `reset_unavailable_for_disabled_entitlement` <a name="reset_unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```python
def reset_unavailable_for_disabled_entitlement() -> None
```

##### `reset_unavailable_for_non_enterprise_tier` <a name="reset_unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```python
def reset_unavailable_for_non_enterprise_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forced_for_compliance_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailable_for_disabled_entitlement_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailable_for_non_enterprise_tier_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forced_for_compliance_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailable_for_disabled_entitlement</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailable_for_non_enterprise_tier</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forced_for_compliance_mode_input`<sup>Optional</sup> <a name="forced_for_compliance_mode_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```python
forced_for_compliance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement_input`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```python
unavailable_for_disabled_entitlement_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier_input`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```python
unavailable_for_non_enterprise_tier_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `forced_for_compliance_mode`<sup>Required</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```python
forced_for_compliance_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_disabled_entitlement`<sup>Required</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```python
unavailable_for_disabled_entitlement: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `unavailable_for_non_enterprise_tier`<sup>Required</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```python
unavailable_for_non_enterprise_tier: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">put_week_day_based_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">reset_week_day_based_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_week_day_based_schedule` <a name="put_week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```python
def put_week_day_based_schedule(
  day_of_week: str = None,
  frequency: str = None,
  window_start_time: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

###### `window_start_time`<sup>Optional</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.windowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

##### `reset_week_day_based_schedule` <a name="reset_week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```python
def reset_week_day_based_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">week_day_based_schedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">week_day_based_schedule_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `week_day_based_schedule`<sup>Required</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```python
week_day_based_schedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `week_day_based_schedule_input`<sup>Optional</sup> <a name="week_day_based_schedule_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```python
week_day_based_schedule_input: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">put_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">reset_window_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window_start_time` <a name="put_window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```python
def put_window_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_window_start_time` <a name="reset_window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```python
def reset_window_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">window_start_time</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">window_start_time_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```python
window_start_time: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `window_start_time_input`<sup>Optional</sup> <a name="window_start_time_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```python
window_start_time_input: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">put_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">reset_can_toggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">reset_enablement_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">reset_restart_even_if_no_updates_available</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enablement_details` <a name="put_enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```python
def put_enablement_details(
  forced_for_compliance_mode: bool | IResolvable = None,
  unavailable_for_disabled_entitlement: bool | IResolvable = None,
  unavailable_for_non_enterprise_tier: bool | IResolvable = None
) -> None
```

###### `forced_for_compliance_mode`<sup>Optional</sup> <a name="forced_for_compliance_mode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.forcedForComplianceMode"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

###### `unavailable_for_disabled_entitlement`<sup>Optional</sup> <a name="unavailable_for_disabled_entitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForDisabledEntitlement"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

###### `unavailable_for_non_enterprise_tier`<sup>Optional</sup> <a name="unavailable_for_non_enterprise_tier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.unavailableForNonEnterpriseTier"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  week_day_based_schedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = None
) -> None
```

###### `week_day_based_schedule`<sup>Optional</sup> <a name="week_day_based_schedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.weekDayBasedSchedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

##### `reset_can_toggle` <a name="reset_can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```python
def reset_can_toggle() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enablement_details` <a name="reset_enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```python
def reset_enablement_details() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_restart_even_if_no_updates_available` <a name="reset_restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```python
def reset_restart_even_if_no_updates_available() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablement_details</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">can_toggle_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablement_details_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restart_even_if_no_updates_available_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">can_toggle</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restart_even_if_no_updates_available</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enablement_details`<sup>Required</sup> <a name="enablement_details" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```python
enablement_details: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `can_toggle_input`<sup>Optional</sup> <a name="can_toggle_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```python
can_toggle_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enablement_details_input`<sup>Optional</sup> <a name="enablement_details_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```python
enablement_details_input: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restart_even_if_no_updates_available_input`<sup>Optional</sup> <a name="restart_even_if_no_updates_available_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```python
restart_even_if_no_updates_available_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `can_toggle`<sup>Required</sup> <a name="can_toggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```python
can_toggle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `restart_even_if_no_updates_available`<sup>Required</sup> <a name="restart_even_if_no_updates_available" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```python
restart_even_if_no_updates_available: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2EffectiveBooleanValOutputReference <a name="WorkspaceSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceSettingV2EffectiveBooleanVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a>

---


### WorkspaceSettingV2EffectiveIntegerValOutputReference <a name="WorkspaceSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceSettingV2EffectiveIntegerVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a>

---


### WorkspaceSettingV2EffectivePersonalComputeOutputReference <a name="WorkspaceSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectivePersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---


### WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2EffectiveStringValOutputReference <a name="WorkspaceSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceSettingV2EffectiveStringVal
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a>

---


### WorkspaceSettingV2IntegerValOutputReference <a name="WorkspaceSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2IntegerVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---


### WorkspaceSettingV2PersonalComputeOutputReference <a name="WorkspaceSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2PersonalCompute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---


### WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2RestrictWorkspaceAdmins
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2StringValOutputReference <a name="WorkspaceSettingV2StringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import workspace_setting_v2

workspaceSettingV2.WorkspaceSettingV2StringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceSettingV2StringVal
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---



