# `aibiDashboardEmbeddingApprovedDomainsSetting` Submodule <a name="`aibiDashboardEmbeddingApprovedDomainsSetting` Submodule" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingApprovedDomainsSetting <a name="AibiDashboardEmbeddingApprovedDomainsSetting" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting databricks_aibi_dashboard_embedding_approved_domains_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aibi_dashboard_embedding_approved_domains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | aibi_dashboard_embedding_approved_domains block. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.aibiDashboardEmbeddingApprovedDomains"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

aibi_dashboard_embedding_approved_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#aibi_dashboard_embedding_approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#aibi_dashboard_embedding_approved_domains}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains">put_aibi_dashboard_embedding_approved_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aibi_dashboard_embedding_approved_domains` <a name="put_aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains"></a>

```python
def put_aibi_dashboard_embedding_approved_domains(
  approved_domains: typing.List[str]
) -> None
```

###### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains.parameter.approvedDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AibiDashboardEmbeddingApprovedDomainsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AibiDashboardEmbeddingApprovedDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingApprovedDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput">aibi_dashboard_embedding_approved_domains_input</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `aibi_dashboard_embedding_approved_domains_input`<sup>Optional</sup> <a name="aibi_dashboard_embedding_approved_domains_input" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```python
aibi_dashboard_embedding_approved_domains_input: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains(
  approved_domains: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}. |

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}.

---

### AibiDashboardEmbeddingApprovedDomainsSettingConfig <a name="AibiDashboardEmbeddingApprovedDomainsSettingConfig" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aibi_dashboard_embedding_approved_domains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains">aibi_dashboard_embedding_approved_domains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | aibi_dashboard_embedding_approved_domains block. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aibi_dashboard_embedding_approved_domains`<sup>Required</sup> <a name="aibi_dashboard_embedding_approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains"></a>

```python
aibi_dashboard_embedding_approved_domains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

aibi_dashboard_embedding_approved_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#aibi_dashboard_embedding_approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#aibi_dashboard_embedding_approved_domains}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import aibi_dashboard_embedding_approved_domains_setting

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approved_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approved_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approved_domains_input`<sup>Optional</sup> <a name="approved_domains_input" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```python
approved_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_domains`<sup>Required</sup> <a name="approved_domains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```python
approved_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```python
internal_value: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---



