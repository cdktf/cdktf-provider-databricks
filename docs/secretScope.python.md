# `secretScope` Submodule <a name="`secretScope` Submodule" id="@cdktf/provider-databricks.secretScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretScope <a name="SecretScope" id="@cdktf/provider-databricks.secretScope.SecretScope"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope databricks_secret_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScope(
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
  backend_type: str = None,
  id: str = None,
  initial_manage_principal: str = None,
  keyvault_metadata: SecretScopeKeyvaultMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#name SecretScope#name}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.backendType">backend_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#id SecretScope#id}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.initialManagePrincipal">initial_manage_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.keyvaultMetadata">keyvault_metadata</a></code> | <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | keyvault_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#name SecretScope#name}.

---

##### `backend_type`<sup>Optional</sup> <a name="backend_type" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.backendType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#id SecretScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_manage_principal`<sup>Optional</sup> <a name="initial_manage_principal" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.initialManagePrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}.

---

##### `keyvault_metadata`<sup>Optional</sup> <a name="keyvault_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.Initializer.parameter.keyvaultMetadata"></a>

- *Type:* <a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

keyvault_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#keyvault_metadata SecretScope#keyvault_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata">put_keyvault_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.resetBackendType">reset_backend_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.resetInitialManagePrincipal">reset_initial_manage_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.resetKeyvaultMetadata">reset_keyvault_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.secretScope.SecretScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.secretScope.SecretScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.secretScope.SecretScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.secretScope.SecretScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.secretScope.SecretScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.secretScope.SecretScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.secretScope.SecretScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.secretScope.SecretScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.secretScope.SecretScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.secretScope.SecretScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.secretScope.SecretScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.secretScope.SecretScope.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.secretScope.SecretScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.secretScope.SecretScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.secretScope.SecretScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.secretScope.SecretScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.secretScope.SecretScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.secretScope.SecretScope.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.secretScope.SecretScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_keyvault_metadata` <a name="put_keyvault_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata"></a>

```python
def put_keyvault_metadata(
  dns_name: str,
  resource_id: str
) -> None
```

###### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata.parameter.dnsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}.

---

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}.

---

##### `reset_backend_type` <a name="reset_backend_type" id="@cdktf/provider-databricks.secretScope.SecretScope.resetBackendType"></a>

```python
def reset_backend_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.secretScope.SecretScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_manage_principal` <a name="reset_initial_manage_principal" id="@cdktf/provider-databricks.secretScope.SecretScope.resetInitialManagePrincipal"></a>

```python
def reset_initial_manage_principal() -> None
```

##### `reset_keyvault_metadata` <a name="reset_keyvault_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.resetKeyvaultMetadata"></a>

```python
def reset_keyvault_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.secretScope.SecretScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.secretScope.SecretScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.secretScope.SecretScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.secretScope.SecretScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.secretScope.SecretScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.secretScope.SecretScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.keyvaultMetadata">keyvault_metadata</a></code> | <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference">SecretScopeKeyvaultMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.backendTypeInput">backend_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.initialManagePrincipalInput">initial_manage_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.keyvaultMetadataInput">keyvault_metadata_input</a></code> | <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.initialManagePrincipal">initial_manage_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.secretScope.SecretScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.secretScope.SecretScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.secretScope.SecretScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.secretScope.SecretScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.secretScope.SecretScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.secretScope.SecretScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.secretScope.SecretScope.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.secretScope.SecretScope.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.secretScope.SecretScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.secretScope.SecretScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.secretScope.SecretScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.secretScope.SecretScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.secretScope.SecretScope.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `keyvault_metadata`<sup>Required</sup> <a name="keyvault_metadata" id="@cdktf/provider-databricks.secretScope.SecretScope.property.keyvaultMetadata"></a>

```python
keyvault_metadata: SecretScopeKeyvaultMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference">SecretScopeKeyvaultMetadataOutputReference</a>

---

##### `backend_type_input`<sup>Optional</sup> <a name="backend_type_input" id="@cdktf/provider-databricks.secretScope.SecretScope.property.backendTypeInput"></a>

```python
backend_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.secretScope.SecretScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_manage_principal_input`<sup>Optional</sup> <a name="initial_manage_principal_input" id="@cdktf/provider-databricks.secretScope.SecretScope.property.initialManagePrincipalInput"></a>

```python
initial_manage_principal_input: str
```

- *Type:* str

---

##### `keyvault_metadata_input`<sup>Optional</sup> <a name="keyvault_metadata_input" id="@cdktf/provider-databricks.secretScope.SecretScope.property.keyvaultMetadataInput"></a>

```python
keyvault_metadata_input: SecretScopeKeyvaultMetadata
```

- *Type:* <a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.secretScope.SecretScope.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="@cdktf/provider-databricks.secretScope.SecretScope.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_manage_principal`<sup>Required</sup> <a name="initial_manage_principal" id="@cdktf/provider-databricks.secretScope.SecretScope.property.initialManagePrincipal"></a>

```python
initial_manage_principal: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.secretScope.SecretScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.secretScope.SecretScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretScopeConfig <a name="SecretScopeConfig" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  backend_type: str = None,
  id: str = None,
  initial_manage_principal: str = None,
  keyvault_metadata: SecretScopeKeyvaultMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#name SecretScope#name}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.backendType">backend_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#id SecretScope#id}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.initialManagePrincipal">initial_manage_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.keyvaultMetadata">keyvault_metadata</a></code> | <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | keyvault_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#name SecretScope#name}.

---

##### `backend_type`<sup>Optional</sup> <a name="backend_type" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#id SecretScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_manage_principal`<sup>Optional</sup> <a name="initial_manage_principal" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.initialManagePrincipal"></a>

```python
initial_manage_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}.

---

##### `keyvault_metadata`<sup>Optional</sup> <a name="keyvault_metadata" id="@cdktf/provider-databricks.secretScope.SecretScopeConfig.property.keyvaultMetadata"></a>

```python
keyvault_metadata: SecretScopeKeyvaultMetadata
```

- *Type:* <a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

keyvault_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#keyvault_metadata SecretScope#keyvault_metadata}

---

### SecretScopeKeyvaultMetadata <a name="SecretScopeKeyvaultMetadata" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScopeKeyvaultMetadata(
  dns_name: str,
  resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.dnsName">dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}. |

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretScopeKeyvaultMetadataOutputReference <a name="SecretScopeKeyvaultMetadataOutputReference" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import secret_scope

secretScope.SecretScopeKeyvaultMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.internalValue"></a>

```python
internal_value: SecretScopeKeyvaultMetadata
```

- *Type:* <a href="#@cdktf/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

---



