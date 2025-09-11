# `recipientFederationPolicy` Submodule <a name="`recipientFederationPolicy` Submodule" id="@cdktf/provider-databricks.recipientFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecipientFederationPolicy <a name="RecipientFederationPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy databricks_recipient_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicy;

RecipientFederationPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .comment(java.lang.String)
//  .name(java.lang.String)
//  .oidcPolicy(RecipientFederationPolicyOidcPolicy)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#workspace_id RecipientFederationPolicy#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.oidcPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#workspace_id RecipientFederationPolicy#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy"></a>

```java
public void putOidcPolicy(RecipientFederationPolicyOidcPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetName"></a>

```java
public void resetName()
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOidcPolicy"></a>

```java
public void resetOidcPolicy()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecipientFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicy;

RecipientFederationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicy;

RecipientFederationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicy;

RecipientFederationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicy;

RecipientFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RecipientFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RecipientFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RecipientFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RecipientFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RecipientFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference">RecipientFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicy"></a>

```java
public RecipientFederationPolicyOidcPolicyOutputReference getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference">RecipientFederationPolicyOidcPolicyOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicyInput"></a>

```java
public java.lang.Object getOidcPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RecipientFederationPolicyConfig <a name="RecipientFederationPolicyConfig" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicyConfig;

RecipientFederationPolicyConfig.builder()
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
//  .comment(java.lang.String)
//  .name(java.lang.String)
//  .oidcPolicy(RecipientFederationPolicyOidcPolicy)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#workspace_id RecipientFederationPolicy#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.oidcPolicy"></a>

```java
public RecipientFederationPolicyOidcPolicy getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#workspace_id RecipientFederationPolicy#workspace_id}.

---

### RecipientFederationPolicyOidcPolicy <a name="RecipientFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicyOidcPolicy;

RecipientFederationPolicyOidcPolicy.builder()
    .issuer(java.lang.String)
    .subject(java.lang.String)
    .subjectClaim(java.lang.String)
//  .audiences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#issuer RecipientFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#subject RecipientFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#subject_claim RecipientFederationPolicy#subject_claim}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#audiences RecipientFederationPolicy#audiences}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#issuer RecipientFederationPolicy#issuer}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#subject RecipientFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#subject_claim RecipientFederationPolicy#subject_claim}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/recipient_federation_policy#audiences RecipientFederationPolicy#audiences}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecipientFederationPolicyOidcPolicyOutputReference <a name="RecipientFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.recipient_federation_policy.RecipientFederationPolicyOidcPolicyOutputReference;

new RecipientFederationPolicyOidcPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```java
public java.lang.String getSubjectClaimInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---



