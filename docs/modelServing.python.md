# `databricks_model_serving`

Refer to the Terraform Registory for docs: [`databricks_model_serving`](https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving).

# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServing(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: ModelServingConfigA,
  name: str,
  id: str = None,
  timeouts: ModelServingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#config ModelServing#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_config` <a name="put_config" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```python
def put_config(
  served_models: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]],
  traffic_config: ModelServingConfigTrafficConfig = None
) -> None
```

###### `served_models`<sup>Required</sup> <a name="served_models" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.servedModels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

###### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.trafficConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#create ModelServing#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#update ModelServing#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServing.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServing.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServing.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId">serving_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```python
config: ModelServingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `serving_endpoint_id`<sup>Required</sup> <a name="serving_endpoint_id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId"></a>

```python
serving_endpoint_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```python
timeouts: ModelServingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```python
config_input: ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ModelServingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: ModelServingConfigA,
  name: str,
  id: str = None,
  timeouts: ModelServingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```python
config: ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#config ModelServing#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```python
timeouts: ModelServingTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigA(
  served_models: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]],
  traffic_config: ModelServingConfigTrafficConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">served_models</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]</code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `served_models`<sup>Required</sup> <a name="served_models" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```python
served_models: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```python
traffic_config: ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigServedModels(
  model_name: str,
  model_version: str,
  workload_size: str,
  environment_vars: typing.Mapping[str] = None,
  instance_profile_arn: str = None,
  name: str = None,
  scale_to_zero_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">workload_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars">environment_vars</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">scale_to_zero_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `workload_size`<sup>Required</sup> <a name="workload_size" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```python
workload_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `environment_vars`<sup>Optional</sup> <a name="environment_vars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars"></a>

```python
environment_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `scale_to_zero_enabled`<sup>Optional</sup> <a name="scale_to_zero_enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```python
scale_to_zero_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigTrafficConfig(
  routes: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]</code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```python
routes: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigTrafficConfigRoutes(
  served_model_name: str,
  traffic_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">served_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">traffic_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |

---

##### `served_model_name`<sup>Required</sup> <a name="served_model_name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```python
served_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

##### `traffic_percentage`<sup>Required</sup> <a name="traffic_percentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```python
traffic_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#update ModelServing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#create ModelServing#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">put_served_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">put_traffic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">reset_traffic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_served_models` <a name="put_served_models" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```python
def put_served_models(
  value: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]

---

##### `put_traffic_config` <a name="put_traffic_config" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```python
def put_traffic_config(
  routes: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]] = None
) -> None
```

###### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.routes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/model_serving#routes ModelServing#routes}

---

##### `reset_traffic_config` <a name="reset_traffic_config" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```python
def reset_traffic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">served_models</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">served_models_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">traffic_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `served_models`<sup>Required</sup> <a name="served_models" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```python
served_models: ModelServingConfigServedModelsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `traffic_config`<sup>Required</sup> <a name="traffic_config" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```python
traffic_config: ModelServingConfigTrafficConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `served_models_input`<sup>Optional</sup> <a name="served_models_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```python
served_models_input: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]

---

##### `traffic_config_input`<sup>Optional</sup> <a name="traffic_config_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```python
traffic_config_input: ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigServedModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingConfigServedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingConfigServedModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]]

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigServedModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars">reset_environment_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">reset_scale_to_zero_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment_vars` <a name="reset_environment_vars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars"></a>

```python
def reset_environment_vars() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scale_to_zero_enabled` <a name="reset_scale_to_zero_enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```python
def reset_scale_to_zero_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput">environment_vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">scale_to_zero_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">workload_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars">environment_vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">scale_to_zero_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">workload_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_vars_input`<sup>Optional</sup> <a name="environment_vars_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput"></a>

```python
environment_vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scale_to_zero_enabled_input`<sup>Optional</sup> <a name="scale_to_zero_enabled_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```python
scale_to_zero_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workload_size_input`<sup>Optional</sup> <a name="workload_size_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```python
workload_size_input: str
```

- *Type:* str

---

##### `environment_vars`<sup>Required</sup> <a name="environment_vars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars"></a>

```python
environment_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scale_to_zero_enabled`<sup>Required</sup> <a name="scale_to_zero_enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```python
scale_to_zero_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workload_size`<sup>Required</sup> <a name="workload_size" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```python
workload_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingConfigServedModels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>]

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigTrafficConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">put_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">reset_routes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_routes` <a name="put_routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```python
def put_routes(
  value: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]

---

##### `reset_routes` <a name="reset_routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```python
def reset_routes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```python
routes: ModelServingConfigTrafficConfigRoutesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `routes_input`<sup>Optional</sup> <a name="routes_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```python
routes_input: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigTrafficConfigRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelServingConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelServingConfigTrafficConfigRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]]

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingConfigTrafficConfigRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">served_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">traffic_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">served_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">traffic_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `served_model_name_input`<sup>Optional</sup> <a name="served_model_name_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```python
served_model_name_input: str
```

- *Type:* str

---

##### `traffic_percentage_input`<sup>Optional</sup> <a name="traffic_percentage_input" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```python
traffic_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `served_model_name`<sup>Required</sup> <a name="served_model_name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```python
served_model_name: str
```

- *Type:* str

---

##### `traffic_percentage`<sup>Required</sup> <a name="traffic_percentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```python
traffic_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingConfigTrafficConfigRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>]

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import model_serving

modelServing.ModelServingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelServingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>]

---



