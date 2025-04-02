# `dataDatabricksMwsNetworkConnectivityConfig` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfig <a name="DataDatabricksMwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  creation_time: typing.Union[int, float] = None,
  egress_config: DataDatabricksMwsNetworkConnectivityConfigEgressConfig = None,
  id: str = None,
  network_connectivity_config_id: str = None,
  region: str = None,
  updated_time: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.egressConfig">egress_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `egress_config`<sup>Optional</sup> <a name="egress_config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.egressConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connectivity_config_id`<sup>Optional</sup> <a name="network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.networkConnectivityConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `updated_time`<sup>Optional</sup> <a name="updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.updatedTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig">put_egress_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig">reset_egress_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">reset_network_connectivity_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime">reset_updated_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_egress_config` <a name="put_egress_config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig"></a>

```python
def put_egress_config(
  default_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules = None,
  target_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules = None
) -> None
```

###### `default_rules`<sup>Optional</sup> <a name="default_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig.parameter.defaultRules"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#default_rules DataDatabricksMwsNetworkConnectivityConfig#default_rules}

---

###### `target_rules`<sup>Optional</sup> <a name="target_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig.parameter.targetRules"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_rules DataDatabricksMwsNetworkConnectivityConfig#target_rules}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_egress_config` <a name="reset_egress_config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig"></a>

```python
def reset_egress_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_connectivity_config_id` <a name="reset_network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```python
def reset_network_connectivity_config_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_updated_time` <a name="reset_updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```python
def reset_updated_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig">egress_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput">egress_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">network_connectivity_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput">updated_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `egress_config`<sup>Required</sup> <a name="egress_config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig"></a>

```python
egress_config: DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_config_input`<sup>Optional</sup> <a name="egress_config_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```python
egress_config_input: DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connectivity_config_id_input`<sup>Optional</sup> <a name="network_connectivity_config_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```python
network_connectivity_config_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `updated_time_input`<sup>Optional</sup> <a name="updated_time_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```python
updated_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connectivity_config_id`<sup>Required</sup> <a name="network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime"></a>

```python
updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigConfig <a name="DataDatabricksMwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  creation_time: typing.Union[int, float] = None,
  egress_config: DataDatabricksMwsNetworkConnectivityConfigEgressConfig = None,
  id: str = None,
  network_connectivity_config_id: str = None,
  region: str = None,
  updated_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig">egress_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `egress_config`<sup>Optional</sup> <a name="egress_config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```python
egress_config: DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connectivity_config_id`<sup>Optional</sup> <a name="network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `updated_time`<sup>Optional</sup> <a name="updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```python
updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfig <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig(
  default_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules = None,
  target_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules">default_rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules">target_rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `default_rules`<sup>Optional</sup> <a name="default_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```python
default_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#default_rules DataDatabricksMwsNetworkConnectivityConfig#default_rules}

---

##### `target_rules`<sup>Optional</sup> <a name="target_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```python
target_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_rules DataDatabricksMwsNetworkConnectivityConfig#target_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules(
  aws_stable_ip_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule = None,
  azure_service_endpoint_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">aws_stable_ip_rule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">azure_service_endpoint_rule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `aws_stable_ip_rule`<sup>Optional</sup> <a name="aws_stable_ip_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```python
aws_stable_ip_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#aws_stable_ip_rule DataDatabricksMwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `azure_service_endpoint_rule`<sup>Optional</sup> <a name="azure_service_endpoint_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```python
azure_service_endpoint_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#azure_service_endpoint_rule DataDatabricksMwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule(
  cidr_blocks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule(
  subnets: typing.List[str] = None,
  target_region: str = None,
  target_services: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">target_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">target_services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}. |

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}.

---

##### `target_region`<sup>Optional</sup> <a name="target_region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```python
target_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}.

---

##### `target_services`<sup>Optional</sup> <a name="target_services" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```python
target_services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules(
  azure_private_endpoint_rules: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">azure_private_endpoint_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]</code> | azure_private_endpoint_rules block. |

---

##### `azure_private_endpoint_rules`<sup>Optional</sup> <a name="azure_private_endpoint_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```python
azure_private_endpoint_rules: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#azure_private_endpoint_rules DataDatabricksMwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules(
  connection_state: str = None,
  creation_time: typing.Union[int, float] = None,
  deactivated: typing.Union[bool, IResolvable] = None,
  deactivated_at: typing.Union[int, float] = None,
  endpoint_name: str = None,
  group_id: str = None,
  network_connectivity_config_id: str = None,
  resource_id: str = None,
  rule_id: str = None,
  updated_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">connection_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">deactivated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">deactivated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connection_state`<sup>Optional</sup> <a name="connection_state" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```python
deactivated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}.

---

##### `deactivated_at`<sup>Optional</sup> <a name="deactivated_at" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```python
deactivated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}.

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}.

---

##### `network_connectivity_config_id`<sup>Optional</sup> <a name="network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}.

---

##### `updated_time`<sup>Optional</sup> <a name="updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```python
updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">reset_target_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">reset_target_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_target_region` <a name="reset_target_region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```python
def reset_target_region() -> None
```

##### `reset_target_services` <a name="reset_target_services" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```python
def reset_target_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">target_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">target_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">target_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">target_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_region_input`<sup>Optional</sup> <a name="target_region_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```python
target_region_input: str
```

- *Type:* str

---

##### `target_services_input`<sup>Optional</sup> <a name="target_services_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```python
target_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```python
target_region: str
```

- *Type:* str

---

##### `target_services`<sup>Required</sup> <a name="target_services" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```python
target_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">put_aws_stable_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">put_azure_service_endpoint_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">reset_aws_stable_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">reset_azure_service_endpoint_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_stable_ip_rule` <a name="put_aws_stable_ip_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```python
def put_aws_stable_ip_rule(
  cidr_blocks: typing.List[str] = None
) -> None
```

###### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.cidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}.

---

##### `put_azure_service_endpoint_rule` <a name="put_azure_service_endpoint_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```python
def put_azure_service_endpoint_rule(
  subnets: typing.List[str] = None,
  target_region: str = None,
  target_services: typing.List[str] = None
) -> None
```

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}.

---

###### `target_region`<sup>Optional</sup> <a name="target_region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.targetRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}.

---

###### `target_services`<sup>Optional</sup> <a name="target_services" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.targetServices"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}.

---

##### `reset_aws_stable_ip_rule` <a name="reset_aws_stable_ip_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```python
def reset_aws_stable_ip_rule() -> None
```

##### `reset_azure_service_endpoint_rule` <a name="reset_azure_service_endpoint_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```python
def reset_azure_service_endpoint_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">aws_stable_ip_rule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">azure_service_endpoint_rule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">aws_stable_ip_rule_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">azure_service_endpoint_rule_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_stable_ip_rule`<sup>Required</sup> <a name="aws_stable_ip_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```python
aws_stable_ip_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `azure_service_endpoint_rule`<sup>Required</sup> <a name="azure_service_endpoint_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```python
azure_service_endpoint_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `aws_stable_ip_rule_input`<sup>Optional</sup> <a name="aws_stable_ip_rule_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```python
aws_stable_ip_rule_input: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `azure_service_endpoint_rule_input`<sup>Optional</sup> <a name="azure_service_endpoint_rule_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```python
azure_service_endpoint_rule_input: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">put_default_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">put_target_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">reset_default_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">reset_target_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_rules` <a name="put_default_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```python
def put_default_rules(
  aws_stable_ip_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule = None,
  azure_service_endpoint_rule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule = None
) -> None
```

###### `aws_stable_ip_rule`<sup>Optional</sup> <a name="aws_stable_ip_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.awsStableIpRule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#aws_stable_ip_rule DataDatabricksMwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

###### `azure_service_endpoint_rule`<sup>Optional</sup> <a name="azure_service_endpoint_rule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.azureServiceEndpointRule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#azure_service_endpoint_rule DataDatabricksMwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

##### `put_target_rules` <a name="put_target_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```python
def put_target_rules(
  azure_private_endpoint_rules: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]] = None
) -> None
```

###### `azure_private_endpoint_rules`<sup>Optional</sup> <a name="azure_private_endpoint_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.azurePrivateEndpointRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/mws_network_connectivity_config#azure_private_endpoint_rules DataDatabricksMwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

##### `reset_default_rules` <a name="reset_default_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```python
def reset_default_rules() -> None
```

##### `reset_target_rules` <a name="reset_target_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```python
def reset_target_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">default_rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">target_rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">default_rules_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">target_rules_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_rules`<sup>Required</sup> <a name="default_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```python
default_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `target_rules`<sup>Required</sup> <a name="target_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```python
target_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `default_rules_input`<sup>Optional</sup> <a name="default_rules_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```python
default_rules_input: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `target_rules_input`<sup>Optional</sup> <a name="target_rules_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```python
target_rules_input: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">reset_connection_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">reset_deactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">reset_deactivated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">reset_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">reset_network_connectivity_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">reset_updated_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_state` <a name="reset_connection_state" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```python
def reset_connection_state() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_deactivated` <a name="reset_deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```python
def reset_deactivated() -> None
```

##### `reset_deactivated_at` <a name="reset_deactivated_at" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```python
def reset_deactivated_at() -> None
```

##### `reset_endpoint_name` <a name="reset_endpoint_name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```python
def reset_endpoint_name() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_network_connectivity_config_id` <a name="reset_network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```python
def reset_network_connectivity_config_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_updated_time` <a name="reset_updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```python
def reset_updated_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">connection_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">deactivated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">deactivated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">network_connectivity_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">updated_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">deactivated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">deactivated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_state_input`<sup>Optional</sup> <a name="connection_state_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```python
connection_state_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivated_at_input`<sup>Optional</sup> <a name="deactivated_at_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```python
deactivated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivated_input`<sup>Optional</sup> <a name="deactivated_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```python
deactivated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `network_connectivity_config_id_input`<sup>Optional</sup> <a name="network_connectivity_config_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```python
network_connectivity_config_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `updated_time_input`<sup>Optional</sup> <a name="updated_time_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```python
updated_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```python
deactivated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deactivated_at`<sup>Required</sup> <a name="deactivated_at" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```python
deactivated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `network_connectivity_config_id`<sup>Required</sup> <a name="network_connectivity_config_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```python
updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mws_network_connectivity_config

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">put_azure_private_endpoint_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">reset_azure_private_endpoint_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_private_endpoint_rules` <a name="put_azure_private_endpoint_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```python
def put_azure_private_endpoint_rules(
  value: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]

---

##### `reset_azure_private_endpoint_rules` <a name="reset_azure_private_endpoint_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```python
def reset_azure_private_endpoint_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">azure_private_endpoint_rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">azure_private_endpoint_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_private_endpoint_rules`<sup>Required</sup> <a name="azure_private_endpoint_rules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```python
azure_private_endpoint_rules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `azure_private_endpoint_rules_input`<sup>Optional</sup> <a name="azure_private_endpoint_rules_input" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```python
azure_private_endpoint_rules_input: typing.Union[IResolvable, typing.List[DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



